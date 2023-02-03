export type ComplaintProps = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  photos: string[];
  status: string;
  company: CompanyProps;
  level: 'low' | 'medium' | 'high';
}

export type CompanyProps = {
  id: string;
  name: string;
  email: string;
  cnpj: string;
  phone: string;
  complaints: ComplaintProps[];
}