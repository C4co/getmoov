import { GreenBg, RedBg, YellowBg, Green } from '../colors/index.js'

function ratingSub(rating) {
  const value = Number(rating)

  if (value > 0) {
    return GreenBg(` ${value} `)
  }

  if (value < 0) {
    return RedBg(` ${value} `)
  }

  return YellowBg(` ${value} `)
}

function truncateString(str, limit) {
  if (str.length > limit) {
    return str.slice(0, limit) + '...'
  }

  return str
}

export function yifySubtitle(torrentList) {
  return torrentList.map(subtitle => {
    const lang = Green(`${subtitle.lang.toUpperCase()}`)
    const name = truncateString(subtitle.name, 30)

    return {
      name: `${ratingSub(subtitle.rating)} • ${lang} | ${name}`,
      value: subtitle.link,
    }
  })
}

export function subtitleLink(torrent) {
  return `\n  ${GreenBg(' SUBTITLE LINK: ')} ${torrent}`
}
