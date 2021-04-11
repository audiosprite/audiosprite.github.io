import * as AmplitudeJS from 'amplitude-js';
import { amplitudeEvents, AmplitudeEventsMap } from './amplitudeEvents';

const amplitudeKey = '2612e90e2375307ea7abf6abf8d5c090';

class AmplitudeClass {
  amplitudeClient: AmplitudeJS.AmplitudeClient;

  constructor() {
    this.amplitudeClient = AmplitudeJS.getInstance(amplitudeKey);

    this.amplitudeClient.init(
      amplitudeKey,
      undefined, // user id
      {
        includeReferrer: true,
        includeUtm: true,
      },
    );
  }

  logEvent = (eventKey: keyof AmplitudeEventsMap, eventValue?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Amplitude] ${amplitudeEvents[eventKey]}`, eventValue || '');
    } else this.amplitudeClient.logEvent(amplitudeEvents[eventKey], eventValue);
  };
}

export const Amplitude = new AmplitudeClass();
