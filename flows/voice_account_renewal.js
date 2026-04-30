var FLOW_voice_account_renewal = {
  "flow": "voice_account_renewal",
  "startNode": "ai_1",
  "meta": {
    "title": "Sarah, here’s your account renewal brief for this week.",
    "conversationType": "Account renewal prep",
    "duration": "3–5 min",
    "topics": [
      {
        "id": "intro",
        "label": "Your week at a glance",
        "time": "1 min",
        "description": "Summary of AI-assisted activity across your active accounts."
      },
      {
        "id": "account",
        "label": "Your priority account",
        "time": "2 min",
        "description": "Closer look at your highest-priority renewal and what’s changed."
      },
      {
        "id": "actions",
        "label": "Before the renewal call",
        "time": "2 min",
        "description": "Key actions to focus on ahead of your renewal conversation."
      }
    ]
  },
  "nodes": {
    "ai_1": {
      "id": "ai_1",
      "topic": "intro",
      "type": "voice_ai",
      "text": "Hey — let's look at your week. Claude assisted on 31 tasks across your 12 active accounts.",
      "audio": "/assets/voice/sarah_csm/renewal/agent_1.mp3",
      "next": { "node": "ai_2", "delay": 900, "autoProgress": true }
    },
    "ai_2": {
      "id": "ai_2",
      "topic": "intro",
      "type": "voice_ai",
      "text": "You're getting strong mileage on post-call summaries — nine this week, averaging under four minutes each. Good discipline.",
      "audio": "/assets/voice/sarah_csm/renewal/agent_2.mp3",
      "next": { "node": "user_2", "delay": 700, "autoProgress": true }
    },
    "user_2": {
      "id": "user_2",
      "topic": "account",
      "type": "voice_user",
      "text": "What should I prioritize before the renewal call?",
      "audio": "/assets/voice/sarah_csm/renewal/sarah_2.mp3",
      "next": { "node": "ai_3", "delay": 900, "autoProgress": true }
    },
    "ai_3": {
      "id": "ai_3",
      "topic": "account",
      "type": "voice_ai",
      "text": "Vantage. One point four million ARR, renewal in 47 days, and their CFO hasn't joined a call since February. That's the one.",
      "audio": "/assets/voice/sarah_csm/renewal/agent_3.mp3",
      "next": { "node": "user_3", "delay": 700, "autoProgress": true }
    },
    "user_3": {
      "id": "user_3",
      "topic": "account",
      "type": "voice_user",
      "text": "I've been worried about that account. What's the play?",
      "audio": "/assets/voice/sarah_csm/renewal/sarah_3.mp3",
      "next": { "node": "ai_4", "delay": 900, "autoProgress": true }
    },
    "ai_4": {
      "id": "ai_4",
      "topic": "account",
      "type": "voice_ai",
      "text": "Three things. Their analytics module usage is down 34% since January — surface that proactively, frame it as a roadmap question, not a red flag. Sarah Chen, the CFO, hasn't joined a call since February and she's the one who signs the renewal. And they evaluated Gainsight in Q1, so have your workflow integration differentiators ready going in.",
      "audio": "/assets/voice/sarah_csm/renewal/agent_4.mp3",
      "next": { "node": "user_4", "delay": 700, "autoProgress": true }
    },
    "user_4": {
      "id": "user_4",
      "topic": "actions",
      "type": "voice_user",
      "text": "That's a tight timeline. What's the single most important move?",
      "audio": "/assets/voice/sarah_csm/renewal/sarah_4.mp3",
      "next": { "node": "ai_5", "delay": 900, "autoProgress": true }
    },
    "ai_5": {
      "id": "ai_5",
      "topic": "actions",
      "type": "voice_ai",
      "text": "Get Sarah Chen into a business case review before May 9. That's the move that closes this renewal. I can draft the exec outreach now if you want.",
      "audio": "/assets/voice/sarah_csm/renewal/agent_5.mp3",
      "next": { "node": "", "delay": 0, "autoProgress": false }
    }
  }
};
