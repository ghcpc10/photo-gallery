import { Injectable, bind } from 'angular2/core';



export class AnalyticsService {
  events:string[] = [];

  public recordEvent(event:string):void {
    console.log('recordEvent ==> ', event, this.events.length);
    this.events.push(event);
  }
}

