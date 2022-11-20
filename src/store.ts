import { createMemo, createSignal } from 'solid-js'


export const [lang, setLang] = createSignal('en')
export const altLangs = createMemo(() => ['en', 'es'].filter( l => l!==lang()))
