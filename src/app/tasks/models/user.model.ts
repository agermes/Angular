export class UserModel {
  id?: number;
  name?: string;
  surname1?: string;
  surname2?: string;
  phone?: string;
}

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: UserAddress;
  phone?: string;
  website?: string;
  company?: UserCompany;
}

interface UserAddress {

  street?: string;
  suite?: string;
  city?: string,
  zipcode?: string;
  geo?: UserAddressGeo
}

interface UserAddressGeo {
  lat?: string;
  lng?: string;
}

interface UserCompany {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}
