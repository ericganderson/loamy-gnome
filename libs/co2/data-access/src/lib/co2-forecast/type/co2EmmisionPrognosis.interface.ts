export interface Co2EmissionPrognosisInterface {
  readonly co2Emission: number
  readonly minutes5utc: Date
  readonly priceArea: 'DK1' | 'DK2'
}

export type Co2EmissionPrognosisType = readonly Co2EmissionPrognosisInterface[]
