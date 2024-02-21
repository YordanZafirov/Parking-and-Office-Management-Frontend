export interface ReservationTableInterface {
  id: string;
  comment: string;
  spotName: string;
  spotDescription: string;
  spotTypeName: string;
  start: Date;
  end: Date;
}