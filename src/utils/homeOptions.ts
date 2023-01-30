
import { SVG } from "../assets"
import { IconSvg } from "../@types/default"

type Options = {
  data: {
    id: number
    name: string
    IconSvg: IconSvg
    href?: string
  }[]
}

export const defaultOptions: Options = {
  data: [
    { id: 0, name: "Faça uma reclamação", IconSvg: SVG.Exclamation },
    { id: 1, name: "Última reclamação", IconSvg: SVG.PastTime },
    { id: 2, name: "Histórico de reclamações", IconSvg: SVG.History },
    { id: 3, name: "Reclamações próximas", IconSvg: SVG.Inloco },
  ]
}