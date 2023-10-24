import { Component } from '@angular/core';

@Component({
  selector: 'app-agency-register-form',
  templateUrl: './agency-register-form.component.html',
  styleUrls: ['./agency-register-form.component.scss']
})
export class AgencyRegisterFormComponent {
  agencyDescriptionPlaceholder: string = "Ex. A premier agency providing thrilling climbing experiences for adventure enthusiasts..."
  agencyEnterprisePlaceholder: string = "Go2Climb ENTERPRISE."
  agencyEmailPlaceholder: string = "go2climb@agency.com"
  agencyRucPlaceholder: string = "745898654"
  agencyContactNumber: string = "(01) 3927356"
  agencyAddressPlaceholderValues:AddressPlaceholderValues = {
    address: '3535 Nixon Avenue',
    city: 'Lima',
    country: 'Peru',
    postalCode: '43215'
  }


}
interface AddressPlaceholderValues{
  address: string;
  city: string;
  country: string;
  postalCode: string
}
