var FLOW_voice_pr_review = {
  "flow": "voice_pr_review",
  "startNode": "ai_1",
  "meta": {
    "title": "Sarah, let’s complete your weekly AI usage check-in.",
    "conversationType": "PR review check-in",
    "duration": "3–5 min",
    "topics": [
      {
        "id": "intro",
        "label": "Your week with AI",
        "time": "2 min",
        "description": "Summary of where AI supported your work this week."
      },
      {
        "id": "review",
        "label": "Your PR review",
        "time": "2 min",
        "description": "What needs your attention and what’s safe to trust."
      },
      {
        "id": "actions",
        "label": "What’s next",
        "time": "1 min",
        "description": "Recommendation to get more leverage from AI-assisted reviews."
      }
    ]
  },
  "nodes": {
    "ai_1": {
      "id": "ai_1",
      "topic": "intro",
      "type": "voice_ai",
      "text": "Good start. Here's where I'd focus next. You spend about five hours a week reviewing code — a lot of that is catching the same routine issues you've seen a hundred times.",
      "audio": "/assets/voice/sarah/pr-review/agent_1.mp3",
      "next": { "node": "ai_2", "delay": 900, "autoProgress": true }
    },
    "ai_2": {
      "id": "ai_2",
      "topic": "intro",
      "type": "voice_ai",
      "text": "Claude can pre-read those for you. Let me show you — here's a review I ran on your last PR this morning.",
      "audio": "/assets/voice/sarah/pr-review/agent_2.mp3",
      "next": { "node": "user_2", "delay": 700, "autoProgress": true }
    },
    "user_2": {
      "id": "user_2",
      "topic": "review",
      "type": "voice_user",
      "text": "Review this PR — what do I actually need to look at?",
      "audio": "/assets/voice/sarah/pr-review/sarah_2.mp3",
      "next": { "node": "ai_3", "delay": 900, "autoProgress": true }
    },
    "ai_3": {
      "id": "ai_3",
      "topic": "review",
      "type": "voice_ai",
      "text": "Looked at all 8 files. One Risky flag — api/payments/retry.ts has new exponential backoff. Confirm the idempotency key is set before the retry loop or you'll double-charge on timeout. That's the one to stare at.\n\nOne FYI on lib/logger.ts — log level changed from info to debug, probably intentional but worth a word with Priya. Everything else — five test files and a doc update — is safe to skim. Coverage holds at 87%.",
      "audio": "/assets/voice/sarah/pr-review/agent_3.mp3",
      "next": { "node": "user_3", "delay": 700, "autoProgress": true }
    },
    "user_3": {
      "id": "user_3",
      "topic": "review",
      "type": "voice_user",
      "text": "That's actually really useful — I usually go through every file.",
      "audio": "/assets/voice/sarah/pr-review/sarah_3.mp3",
      "next": { "node": "ai_4", "delay": 900, "autoProgress": true }
    },
    "ai_4": {
      "id": "ai_4",
      "topic": "actions",
      "type": "voice_ai",
      "text": "That's the shift. The Risky flag is where your judgment matters — everything else, you can trust the signal. Do this on every PR and you get a full hour back on Tuesdays.",
      "audio": "/assets/voice/sarah/pr-review/agent_4.mp3",
      "next": { "node": "user_4", "delay": 700, "autoProgress": true }
    },
    "user_4": {
      "id": "user_4",
      "topic": "actions",
      "type": "voice_user",
      "text": "Yeah, I'd want that set up. Can you do that?",
      "audio": "/assets/voice/sarah/pr-review/sarah_4.mp3",
      "next": { "node": "ai_5", "delay": 900, "autoProgress": true }
    },
    "ai_5": {
      "id": "ai_5",
      "topic": "actions",
      "type": "voice_ai",
      "text": "I'll set it up on your repo. From tomorrow, every PR gets pre-screened before it hits your queue. You review the flags, not the noise.",
      "audio": "/assets/voice/sarah/pr-review/agent_5.mp3",
      "next": { "node": "", "delay": 0, "autoProgress": false }
    }
  }
};
