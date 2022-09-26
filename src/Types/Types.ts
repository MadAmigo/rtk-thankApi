export interface IUser {
  name:string
  id:number
  email?:string
  address?:{
    street?: string
      suite?: string
      city?: string
      zipcode?: string
      geo?: {
        lat?: string
        lng?: string
    }
  }
  phone?: string
  website?: string
  company?: {
      name?: string
      catchPhrase?: string
      bs?: string
  }
}
export interface IResponceUser<T> {
  users:T[]
}