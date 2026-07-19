# Profluento

Public marketing site for **Profluento** (AI-powered CRM for wealth managers) at [profluento.dev](https://profluento.dev).

- Frontend demo only: product story, screenshots, demo video, consultation CTA
- Does **not** run scoring, enrichment, or advisor data pipelines in this repo

### Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Stack

- Next.js, TypeScript, Tailwind CSS, Vercel Analytics
- Deployed on Vercel (`profluento.dev`)

---

> **Privacy:** The lead-scoring implementation is kept private and is **not** published in this public repository (source, proprietary configs, private datasets, and credentials stay internal). The documentation below is included so readers can understand Profluento's scoring architecture. Paths like `./src/index` refer to that private scoring system, not files in this marketing-site repo.


## Lead Scoring System

A comprehensive, modular lead qualification system built for LinkedIn-derived professional data. This system provides explainable, configurable scoring for B2B sales and recruiting use cases.

## 🚀 Quick Start

```javascript
const LeadScoring = require('./src/index');

// Quick scoring with default configuration
const rawPersonData = require('./data/person.json')[0];
const score = LeadScoring.quickScore(rawPersonData.person);

console.log(`Lead Score: ${score.total_score}`);
console.log(`Top Factor: ${score.factor_scores.seniority} (Seniority)`);
```


## 🏗️ Architecture

### Core Components

1. **Scoring Engine** (`index.js`)
   - Main API entry point
   - Orchestrates scoring pipeline
   - Provides factory methods

2. **Configuration** (`config.js`)
   - Centralized scoring parameters
   - Factor weights and thresholds
   - Compliance settings

3. **Data Contracts** (`contracts.js`)
   - Input data schemas
   - Validation rules
   - Contract utilities

4. **Normalizers** (`normalizers.js`)
   - Raw data processing
   - Field standardization
   - Enrichment functions

5. **Validators** (`validators.js`)
   - Data integrity checks
   - Compliance validation
   - Schema validation

6. **Utilities** (`utils.js`)
   - Common helper functions
   - Date/string/array operations
   - Math utilities

## 🎯 Scoring Factors

The system evaluates leads across 10 key dimensions:

| Factor | Weight | Description |
|--------|--------|-------------|
| **Recency** | 15% | Recent job changes and activity |
| **Seniority** | 20% | Title level and career progression |
| **Company Quality** | 15% | Company size, growth, and industry |
| **Location Proximity** | 10% | Geographic targeting alignment |
| **Education** | 10% | School quality and relevance |
| **Social Presence** | 8% | Online profile completeness |
| **Compensation Signals** | 7% | Sales/commission indicators |
| **Industry Affinity** | 5% | Industry matching |
| **Network Strength** | 5% | Professional connections |
| **Stability** | 5% | Employment tenure patterns |

## 📊 Usage Examples

### Basic Scoring

```javascript
const LeadScoring = require('./src/index');

// Load sample data
const rawPerson = require('./data/person.json')[0].person;

// Create scoring engine
const scorer = LeadScoring.create();

// Normalize and score
const normalizedPerson = scorer.normalizePersonData(rawPerson);
const scoreResult = scorer.calculateScore(normalizedPerson);

console.log('Score Result:', {
  total_score: scoreResult.total_score,
  factor_breakdown: scoreResult.factor_scores,
  explanation: scoreResult.explanation.summary
});
```

### Custom Configuration

```javascript
const LeadScoring = require('./src/index');

// Custom configuration
const customConfig = {
  weights: {
    recency: 20,           // Increase recency importance
    seniority: 25,         // Increase seniority importance
    education: 5,          // Decrease education importance
    // ... other weights adjust automatically
  },
  factors: {
    education: {
      target_schools: [
        "stanford university",
        "harvard university",
        "your-target-school"
      ]
    }
  }
};

const scorer = LeadScoring.create(customConfig);
const score = scorer.calculateScore(normalizedPerson);
```

### Advanced Filtering

```javascript
const searchFilters = {
  target_cities: ["Seattle", "San Francisco", "Austin"],
  target_states: ["Washington", "California", "Texas"],
  target_schools: ["university of washington", "stanford university"],
  target_industries: ["Technology", "SaaS", "Software"],
  location_proximity_radius_km: 50,
  exclude_remote_only: true
};

const score = scorer.calculateScore(normalizedPerson, searchFilters);
```

## 🔧 Configuration

### Factor Weights
Weights must sum to 100. Modify in `src/config.js`:

```javascript
const customWeights = {
  recency: 15,
  seniority: 20,
  company_quality: 15,
  // ... adjust as needed
};
```

### Title Mappings
Customize title-to-seniority mappings:

```javascript
const customConfig = {
  factors: {
    seniority: {
      title_mappings: {
        "your-custom-title": {
          seniority: 8,
          function: "your-function",
          decision_maker: true
        }
      }
    }
  }
};
```

### School Rankings
Modify target school lists for education scoring:

```javascript
const customConfig = {
  factors: {
    education: {
      target_schools: [
        "your-target-school",
        "another-target-school"
      ]
    }
  }
};
```

## 📋 Data Input Format

The system expects LinkedIn-derived data in the following structure:

```javascript
{
  "person": {
    "id": "_EqEN8f2Ybo756KSskqepyturv8iCM4",
    "fullName": "John Doe",
    "location": "Seattle, Washington, United States",
    "URLs": {
      "linkedin": "linkedin.com/in/johndoe",
      "twitter": "twitter.com/johndoe"
    },
    "experienceList": [
      {
        "companyName": "Tech Corp",
        "positionList": [
          {
            "title": "Senior Software Engineer",
            "startDate": "2020-01-01T00:00:00.000Z",
            "endDate": null,
            "description": "Led development of..."
          }
        ]
      }
    ],
    "educationList": [
      {
        "name": "University of Washington",
        "degreeName": "Bachelor of Science",
        "fieldOfStudy": "Computer Science"
      }
    ],
    "linkedinConnections": 1200,
    "linkedinFollowers": 850
  }
}
```

## 🛡️ Compliance & Safety

### Age Scoring
- **Disabled by default** for compliance
- Must be explicitly enabled in configuration
- Respects data protection regulations

### Sensitive Data
- Hard blocks on: religion, ethnicity, gender, political affiliation
- Configurable field blocklist
- Audit trail support

### Data Retention
- Configurable retention policies
- Default: 7 years (2555 days)

## 🔍 Validation

### Data Completeness
```javascript
const scorer = LeadScoring.create();
const validation = scorer.validatePersonData(normalizedPerson);

if (!validation.overall.isValid) {
  console.log('Validation errors:', validation.overall.errors);
}
```

### Configuration Validation
```javascript
const isValid = LeadScoring.validateConfig(customConfig);
if (!isValid.isValid) {
  console.log('Config errors:', isValid.errors);
}
```

## 📈 Scoring Algorithm

### Factor Calculation
Each factor is calculated independently, then weighted and combined:

```
Total Score = Σ(factor_score × factor_weight)
```

### Normalization
- All factor scores are normalized to 0-100 scale
- Missing data uses configurable fallback scores
- Weights automatically renormalize if modified

### Explainability
Every score includes:
- Factor-by-factor breakdown
- Raw feature contributions
- Human-readable reasons
- Audit trail metadata

## 🧪 Testing

### Unit Tests
```bash
# Run test suite
npm test

# Run specific test file
npm test -- tests/scoring.test.js
```

### Performance Testing
```javascript
const { performance } = require('perf_hooks');

const start = performance.now();
// Run scoring on large dataset
const end = performance.now();

console.log(`Processed ${dataset.length} records in ${end - start}ms`);
```

## 🚀 Deployment

### Production Setup
```javascript
// production-config.js
module.exports = {
  weights: { /* production weights */ },
  compliance: {
    allow_age_scoring: false,
    audit_trail_enabled: true
  },
  // ... other production settings
};
```

### Monitoring
```javascript
// Add logging to scoring pipeline
const scoreWithLogging = (person) => {
  console.log(`Scoring person: ${person.identity.full_name}`);
  const result = scorer.calculateScore(person);

  // Log scoring metrics
  console.log(`Score: ${result.total_score}, Factors:`, result.factor_scores);

  return result;
};
```

## 🤝 Contributing

### Adding New Factors
1. Add factor configuration to `src/config.js`
2. Implement scoring logic in `src/index.js`
3. Update weights to sum to 100
4. Add tests and documentation

### Extending Normalizers
```javascript
// src/normalizers.js
normalizeCustomField: function(person) {
  // Custom normalization logic
  return normalizedValue;
}
```

## 📚 API Reference

### LeadScoring
- `LeadScoring.create(config?)` → ScoringEngine
- `LeadScoring.quickScore(person, config?)` → ScoreResult
- `LeadScoring.getDefaultConfig()` → Config
- `LeadScoring.validateConfig(config)` → ValidationResult

### ScoringEngine
- `calculateScore(person, filters?)` → ScoreResult
- `normalizePersonData(rawPerson)` → NormalizedPerson
- `validatePersonData(person)` → ValidationResult
- `getConfig()` → Config
- `updateConfig(config)` → void

## 🐛 Troubleshooting

### Common Issues

**Weights don't sum to 100**
```javascript
const totalWeight = Object.values(config.weights).reduce((sum, w) => sum + w, 0);
console.log(`Total: ${totalWeight}, Expected: 100`);
```

**Invalid title mappings**
```javascript
const title = "Unknown Title";
const mapping = ConfigUtils.getTitleMapping(title, config);
// Returns default mapping if title not found
```

**Missing data handling**
```javascript
// Check data completeness
const completeness = person.metadata?.data_completeness_score || 0;
if (completeness < 60) {
  console.warn(`Low data completeness: ${completeness}%`);
}
```

## License

Private. This GitHub repository is the Profluento marketing site. Lead-scoring source and production systems are not open-sourced here.

## Support

For product questions: [book a consultation](https://tidycal.com/anushsonone/profluento-consultation).
