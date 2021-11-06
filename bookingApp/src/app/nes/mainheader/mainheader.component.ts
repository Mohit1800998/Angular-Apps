import { Component, OnInit } from '@angular/core';

import { hotelDetails } from './../hotelDetails';
import { SelectedHotel } from './../SelectedHotel';
@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {

  hotelArr:hotelDetails[] = [];
  selectedHotelArr:hotelDetails[] = [];
  
  selectedHotelArrr:hotelDetails[] = [];
  searchText:any;

  constructor() { 
    let hotel1 = new hotelDetails("easte","delhi",234);
    let hotel2 = new hotelDetails("waste","noida",274);
    let hotel3 = new hotelDetails("naste","ghaziabad",134);


    this.hotelArr.push(hotel1);
    this.hotelArr.push(hotel2);
    this.hotelArr.push(hotel3);
    this.hotelArr.push(new hotelDetails("CL Tech","kerla",40));
    this.hotelArr.push(new hotelDetails("Taawer","rajasthan",40));
    this.hotelArr.push(new hotelDetails("ABC","Gujarat",10));
    
    
  }
  // <!-- ju
  addHotel(stock:hotelDetails)
  {
    if(!this.selectedHotelArr.toString().includes(stock.hotelName)){
      console.log(this.selectedHotelArr.toString().includes(stock.hotelName));
    this.selectedHotelArr.push(stock);
    
    }
  }

  doThis(){
    console.log(this.selectedHotelArr);
    this.selectedHotelArrr = [];
    this.selectedHotelArrr = this.selectedHotelArr;
    return this.selectedHotelArrr;
  }
  ngOnInit(): void {
  }

}
