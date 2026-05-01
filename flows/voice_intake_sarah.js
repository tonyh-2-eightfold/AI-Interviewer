var FLOW_voice_intake_sarah = {
  "flow": "voice_intake_sarah",
  "startNode": "ai_1",
  "meta": {
    "title": "Hey Sarah, welcome to Career Coach onboarding.",
    "conversationType": "Orientation conversation",
    "duration": "5–10 min",
    "topics": [
      {
        "id": "intro",
        "label": "Intro to Career Agent",
        "time": "2 min",
        "description": "Get to know how Career Agent works and what to expect from this conversation."
      },
      {
        "id": "goals",
        "label": "Your goals",
        "time": "5 min",
        "description": "Explore your current focus and where you'd like to go."
      },
      {
        "id": "opportunities",
        "label": "Opportunities for you",
        "time": "3 min",
        "description": "Discover personalised opportunities matched to your profile and goals."
      }
    ]
  },
  "nodes": {
    "ai_1": {
      "id": "ai_1",
      "topic": "intro",
      "type": "voice_ai",
      "text": "Hi Sarah — I'm your Career Agent. I can help you focus your development, strengthen key skills, and make progress in your current role — or toward future opportunities. I'll also check in with you along the way so your plan stays relevant and doesn't just sit there.",
      "next": { "node": "ai_2", "delay": 1100, "autoProgress": true }
    },
    "ai_2": {
      "id": "ai_2",
      "topic": "intro",
      "type": "voice_ai",
      "text": "Before we get started — everything you share here is private to you. It's not shared with your manager or used for evaluation. This is just to help tailor guidance to what matters most to you.",
      "next": { "node": "ai_3", "delay": 1100, "autoProgress": true }
    },
    "ai_3": {
      "id": "ai_3",
      "topic": "intro",
      "type": "voice_ai",
      "text": "This will just take a couple of minutes. I'll ask a few questions to understand your focus, then we'll look at how to make the most of your development plan. Does that sound okay?",
      "next": { "node": "user_3", "delay": 700, "autoProgress": true }
    },
    "user_3": {
      "id": "user_3",
      "topic": "intro",
      "type": "voice_user",
      "text": "Yes, sounds good.",
      "next": { "node": "ai_4", "delay": 900, "autoProgress": true }
    },
    "ai_4": {
      "id": "ai_4",
      "topic": "goals",
      "type": "voice_ai",
      "text": "I've had a look at your development plan — it looks like you've been building toward stronger cross-team coordination and supply chain awareness. These are both relevant to your current role as a Supply Chain Operator.\n\nIs that still where your focus is — getting stronger in your current role? Or has something shifted — are you starting to explore other opportunities, or thinking about a move?",
      "next": { "node": "user_4", "delay": 700, "autoProgress": true }
    },
    "user_4": {
      "id": "user_4",
      "topic": "goals",
      "type": "voice_user",
      "text": "Develop — I want to get stronger in my current role.",
      "next": { "node": "ai_5", "delay": 900, "autoProgress": true }
    },
    "ai_5": {
      "id": "ai_5",
      "topic": "goals",
      "type": "voice_ai",
      "text": "That makes sense given your role. When you think about getting stronger day-to-day, which of these feels closest to what you're working on? Coordinating more smoothly with other teams during handovers or shift changes, understanding how what you do connects to the wider supply chain, communicating more clearly when something goes wrong on the line, or something else.",
      "next": { "node": "user_5", "delay": 700, "autoProgress": true }
    },
    "user_5": {
      "id": "user_5",
      "topic": "goals",
      "type": "voice_user",
      "text": "Coordinating more smoothly with other teams — when shifts change or we're working with another team, things get missed. I'm not always sure what they need from me.",
      "next": { "node": "ai_6", "delay": 900, "autoProgress": true }
    },
    "ai_6": {
      "id": "ai_6",
      "topic": "goals",
      "type": "voice_ai",
      "text": "What would success look like for you there?",
      "next": { "node": "user_6", "delay": 700, "autoProgress": true }
    },
    "user_6": {
      "id": "user_6",
      "topic": "goals",
      "type": "voice_user",
      "text": "Everyone knowing what they need to know — without me having to chase it, and without things falling through the gap when teams hand over.",
      "next": { "node": "ai_7", "delay": 900, "autoProgress": true }
    },
    "ai_7": {
      "id": "ai_7",
      "topic": "goals",
      "type": "voice_ai",
      "text": "Has your supervisor or anyone you work closely with given you specific feedback on this — even informally?",
      "next": { "node": "user_7", "delay": 700, "autoProgress": true }
    },
    "user_7": {
      "id": "user_7",
      "topic": "goals",
      "type": "voice_user",
      "text": "Yes — my supervisor mentioned after a production delay that I should have flagged the issue earlier, before it affected the team downstream. That stuck with me.",
      "next": { "node": "ai_8", "delay": 900, "autoProgress": true }
    },
    "ai_8": {
      "id": "ai_8",
      "topic": "goals",
      "type": "voice_ai",
      "text": "Have you already started working on this in any way?",
      "next": { "node": "user_8", "delay": 700, "autoProgress": true }
    },
    "user_8": {
      "id": "user_8",
      "topic": "goals",
      "type": "voice_user",
      "text": "I've been picking it up as I go, but there's no structure to it.",
      "next": { "node": "ai_9", "delay": 900, "autoProgress": true }
    },
    "ai_9": {
      "id": "ai_9",
      "topic": "goals",
      "type": "voice_ai",
      "text": "Is there a specific moment coming up where this matters — or is it more of a general longer-term goal?",
      "next": { "node": "user_9", "delay": 700, "autoProgress": true }
    },
    "user_9": {
      "id": "user_9",
      "topic": "goals",
      "type": "voice_user",
      "text": "Yes, there's something specific — we're moving to a new cross-team handover process in the next few months and I want to be better prepared for it.",
      "next": { "node": "ai_10", "delay": 900, "autoProgress": true }
    },
    "ai_10": {
      "id": "ai_10",
      "topic": "opportunities",
      "type": "voice_ai",
      "text": "Got it — let me reflect that back.\n\nYour focus is developing in your current role. The main challenge is coordinating more effectively with other teams — specifically making sure the right information gets passed on during handovers so things don't fall through the gap. Your supervisor has flagged this directly. You've been picking it up day-to-day but without much structure, and there's a new cross-team handover process rolling out in the next few months that makes this timely.\n\nDoes that sound right, or is there anything you'd adjust?",
      "next": { "node": "user_10", "delay": 700, "autoProgress": true }
    },
    "user_10": {
      "id": "user_10",
      "topic": "opportunities",
      "type": "voice_user",
      "text": "That's exactly it.",
      "next": { "node": "ai_11", "delay": 900, "autoProgress": true }
    },
    "ai_11": {
      "id": "ai_11",
      "topic": "opportunities",
      "type": "voice_ai",
      "text": "Great — your development plan already has some relevant items on it. Let's look at what's there, see what still makes sense given what you've just told me, and figure out what to focus on before the new process goes live.\n\nI'll pull it up now and we can walk through it together.",
      "next": { "node": "", "delay": 0, "autoProgress": false }
    }
  }
};
