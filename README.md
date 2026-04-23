# AI Coach — Check-in Prototype

Interactive prototype of an AI-powered career coach that reviews a developer's weekly AI-assisted work and gives personalized feedback.

## Live demo

Deploy via GitHub Pages (see below). Local preview:

```bash
npx serve .
# then open http://localhost:3000
```

> **Do not open `index.html` by double-clicking.** The voice narration uses `fetch()` to ElevenLabs, which requires an `http://` or `https://` origin — `file://` will fail silently.

## Deploying to GitHub Pages

1. Push this folder to the repo root (or to `/docs`).
2. Repo → **Settings** → **Pages**.
3. Source: `main` branch, `/ (root)`.
4. The site will be live at `https://tonyh-2-eightfold.github.io/AI-Coach/`.

## Files

```
index.html           # The entire prototype — HTML + CSS + JS inline
images/
  john.png           # Coach avatar
  claude-logo.png    # Claude wordmark in the chat panel
```

Everything else (fonts, icons) comes from Google Fonts CDN.

## How it works

- **Voice**: Primary TTS via ElevenLabs (custom voice). Automatic fallback to the browser's Web Speech API if the ElevenLabs call fails.
- **Start gate**: The "Start check-in" overlay exists to satisfy browser autoplay policy — audio can't play without a prior user gesture.
- **Flow**: Coach talks → transcript types in sync → screenshare of Claude reviewing a PR animates in → user responds → coach wraps up.

## ⚠️ Security: ElevenLabs API key

The ElevenLabs API key is **embedded directly in `index.html`** (search for `ELEVEN_KEY`). This is a deliberate tradeoff for a quick-share prototype, but it means:

- **Anyone who views the page source can extract the key.**
- The key is restricted (Text-to-Speech + Voices read-only) and has a monthly credit cap, so the blast radius is bounded — but it *will* be abused if this URL becomes public.

### Before sharing publicly

Pick one:

1. **Lock down the current key** — confirm in the ElevenLabs dashboard that it's restricted to TTS-only and has a tight monthly credit cap. Acceptable for internal demos.
2. **Proxy the key** — stand up a tiny serverless function (Cloudflare Worker, Vercel Function, etc.) that holds the real key server-side, and have the frontend call *that* instead. ~20 lines of code.
3. **Remove narration** — comment out the ElevenLabs call; Web Speech will take over.

### Rotating the key

Key format: `sk_...`
1. ElevenLabs dashboard → Workspace → API Keys → revoke the old key.
2. Generate a new one with the same restrictions (TTS: Access, Voices: Read, everything else: No Access).
3. Replace the value of `ELEVEN_KEY` in `index.html`.

## Browser support

Tested in recent Chrome/Edge/Safari. Requires:
- `fetch()` + Blob URLs
- `MediaRecorder` / `<audio>` MP3 playback
- `speechSynthesis` for the fallback

## Notes

- Filenames are lowercase — stays consistent with case-sensitive Linux hosts (GitHub Pages).
- All asset paths are relative.
- No build step. Edit `index.html`, commit, push, done.
