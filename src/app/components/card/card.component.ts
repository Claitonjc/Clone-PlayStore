import { Component, Input } from '@angular/core';
import { CardLabelComponent } from '../card/card-label/card-label.component'
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  gameCover: string = ""
  @Input()
  gameLabel: string=""
  @Input()
  gameType: string = "XPTO | PS4"
  @Input()
  gamePrice: string = "R$399,90"

}
