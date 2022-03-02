import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'imagetext-split',
  templateUrl: './imagetext-split.component.html',
  styleUrls: ['./imagetext-split.component.css']
})
export class ImagetextSplitComponent implements OnInit {

  @Input() text! : string;
  @Input() title! : string;
  @Input() imageUrl : string = "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-21.png";

  constructor() { }

  ngOnInit(): void {
  }

}
