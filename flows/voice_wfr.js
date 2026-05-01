var FLOW_voice_wfr = {
  "flow": "voice_wfr",
  "startNode": "ai_1",
  "meta": {
    "title": "Sarah, let’s review your AI adoption.",
    "conversationType": "AI adoption review",
    "duration": "3–5 min",
    "topics": [
      {
        "id": "intro",
        "label": "Your AI adoption",
        "time": "1 min",
        "description": "Where you stand today compared to peer benchmarks."
      },
      {
        "id": "tasks",
        "label": "Your biggest opportunities",
        "time": "2 min",
        "description": "Where AI can save you the most time based on your work."
      },
      {
        "id": "actions",
        "label": "Where to start",
        "time": "2 min",
        "description": "Practical next step to increase your AI adoption."
      }
    ]
  },
  "nodes": {
    "ai_1": {
      "id": "ai_1",
      "topic": "intro",
      "type": "voice_ai",
      "text": "Hey Sarah — you're at 31% AI adoption. That's the share of your augmentable work you're actively doing with AI today.",
      "next": { "node": "ai_2", "delay": 900, "autoProgress": true }
    },
    "ai_2": {
      "id": "ai_2",
      "topic": "intro",
      "type": "voice_ai",
      "text": "The peer benchmark for Customer Success Managers at your level is 58%. There's a meaningful gap — and from your usage data, a clear path to close it.",
      "next": { "node": "user_2", "delay": 700, "autoProgress": true }
    },
    "user_2": {
      "id": "user_2",
      "topic": "tasks",
      "type": "voice_user",
      "text": "Where's the biggest gap?",
      "next": { "node": "ai_3", "delay": 900, "autoProgress": true }
    },
    "ai_3": {
      "id": "ai_3",
      "topic": "tasks",
      "type": "voice_ai",
      "text": "QBR preparation. Your peers are averaging 64% AI-assisted there, and your skills profile doesn't show AI signals in that area. That's five hours a week — at least two are reclaimable.",
      "next": { "node": "user_3", "delay": 700, "autoProgress": true }
    },
    "user_3": {
      "id": "user_3",
      "topic": "tasks",
      "type": "voice_user",
      "text": "I've just never really used AI for QBR work.",
      "next": { "node": "ai_4", "delay": 900, "autoProgress": true }
    },
    "ai_4": {
      "id": "ai_4",
      "topic": "tasks",
      "type": "voice_ai",
      "text": "Post-call follow-ups are a partial gap — you're using AI there but below peer level. And account research is actually a bright spot — strong AI signals in your profile, consistent with your peers at 72%.",
      "next": { "node": "user_4", "delay": 700, "autoProgress": true }
    },
    "user_4": {
      "id": "user_4",
      "topic": "actions",
      "type": "voice_user",
      "text": "What should I start with?",
      "next": { "node": "ai_5", "delay": 900, "autoProgress": true }
    },
    "ai_5": {
      "id": "ai_5",
      "topic": "actions",
      "type": "voice_ai",
      "text": "CSMs at your level who closed the QBR gap started with AI-drafted exec summaries — not the full deck. Most get a solid first draft in under 20 minutes. That's where I'd suggest starting. Want me to add it to your development plan?",
      "next": { "node": "", "delay": 0, "autoProgress": false }
    }
  }
};
