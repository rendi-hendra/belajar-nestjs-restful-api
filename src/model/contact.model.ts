export class contactResponse {
  id: number;
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export class CreateContactRequest {
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}
