export interface Iuser {
  id: number;
  name: string;
  email: string;
  senha: string;
}

export interface ItodoCategory {
  id: number;
  name: string;
}

export interface ItodoCategoryList {
  id: number;
  categories: ItodoCategory[];
  add( _obj:ItodoCategory ):void;
}

export interface ItodoTask {
  id: number;
  category: number;
  description: string;
  done: boolean;
}

export interface ItodoList {
  id: number;
  name: string;
  user: number;
  tarefas: ItodoTask[];
}
