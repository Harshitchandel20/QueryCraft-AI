# QueryCraft AI 🚀

QueryCraft AI is an AI-powered CRM intelligence system that converts natural language business questions into safe, real-time MongoDB aggregation queries and turns the results into actionable sales insights.

## 🌟 Features
- **Natural Language → MongoDB Aggregation (NL-to-DB)**: Convert questions like "Who are my top customers?" into optimized aggregation pipelines.
- **AI Tool Calling**: Uses advanced LLM functions with strict safety validation.
- **Real-time CRM Insights**: Direct connection to your MongoDB data (No mock data!).
- **Sales Intelligence**: Automatically generate personalized outreach emails based on retrieved data.
- **High Security**: Multi-layer safety guardrails and read-only database execution.

## 🛠 Tech Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, Lucide React.
- **Backend**: Node.js, Express, TypeScript.
- **AI**: LLM Function Calling (OpenAI/Gemini).
- **Database**: MongoDB (Aggregations).
- **Shared**: Shared TypeScript types for full-stack consistency.

## 📐 Architecture
```text
[ User Query ] -> [ Next.js Frontend ] -> [ Express Backend ]
                                                 |
                                         [ AI Validation Layer ] <-> [ LLM ]
                                                 |
                                         [ MongoDB (Read-Only) ]
                                                 |
[ Dashboards / Draft Emails ] <------------- [ Results ]
```

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- OpenAI or Gemini API Key

### Backend Setup
1. `cd backend`
2. `npm install`
3. Create `.env` with:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   AI_API_KEY=your_api_key
   ```
4. `npm run dev`

### Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## 🛡 Security & Safety
QueryCraft AI is built with "Safety First" principles:
- **Operator Whitelist**: Only `$match`, `$group`, `$project`, `$sort`, and `$limit` are allowed.
- **Strict Read-Only**: The backend uses an IAM-restricted user with zero write/delete permissions.
- **Guardrail Layer**: Every generated query is inspected for depth and complexity before execution.

---
Built with ❤️