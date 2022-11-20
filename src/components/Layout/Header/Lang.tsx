import { Component, For } from 'solid-js'

import { altLangs, setLang } from '../../../store'


const newLang = (lang) => setLang(lang)

export const Lang: Component = () => (
  <For each={ altLangs() }>
    {(altLang) => <img class="img-fluid" src={`/${altLang}.png`} alt={ altLang } onClick={() => newLang(altLang)} />}
  </For>
)
