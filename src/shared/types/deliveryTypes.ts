export interface IDeliveryAdress {
    city: string;
    adress: string;
    apartment: string;
}

export interface IDeliveryAdresses {
    adresses: IDeliveryAdress[];
  }