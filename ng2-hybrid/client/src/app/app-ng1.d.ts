declare module PinerestApp_ng1 {

  export interface Pin {
    id: string;
    user_name: string;
    user_avatar: string;
    img_title: string;
    img_src: string;
    liked: boolean;
  }

  export interface pinsService {
    getPins(): Promise<Pin[]>;
    addPin(pin:Pin): Promise<any>;
  }

}

declare module 'PinerestApp_ng1' {
  export = PinerestApp_ng1;
}