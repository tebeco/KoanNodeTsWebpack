export interface IYourApplicationConfiguration {
  backend: {
    url: string;
  }
}

export const appConfiguration: IYourApplicationConfiguration = (window as any).someArbitraryKey;
