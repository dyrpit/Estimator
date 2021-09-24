// Generated by https://quicktype.io

export interface Projects {
  projects: Project[];
}

export interface Project {
  projectName: string;
  projectId?: string;
  estimatedBy?: string;
  estimationDate?: Object;
  verifiedBy?: string;
  verificationDate?: string;
  estStart?: string;
  estEns?: string;
  teamSize?: number;
  timeBudget?: number;
  effort?: number;
  sections?: Section[];
  rawDevelopmentEffortSum?: RawDevelopmentEffortSum;
  summary?: Main[];
  assumptions?: Assumption[];
}

export interface Assumption {
  id: number;
  text: string;
}

export interface RawDevelopmentEffortSum {
  name: string;
  main: Main;
  parts: Part[];
  total: Total;
}

export interface Main {
  minMd?: number;
  minMdFormula?: string;
  maxMd?: number;
  maxMdFormula?: string;
  predictedMd?: number;
  predictedMdFormula?: string;
  risk?: number;
  riskFormula?: string;
  // name?: string;
  estDeliveryDate?: string;
}

export interface Part {
  name: string;
  procent: number;
  role: string;
  minMd: number;
  minMdFormula: string;
  maxMd: number;
  maxMdFormula: string;
  predictedMd: number;
  predictedMdFormula: string;
}
export interface Total {
  name: string;
  minMd: number;
  minMdFormula: string;
  maxMd: number;
  maxMdFormula: string;
  predictedMd: number;
}

export interface Section {
  sectionId?: string;
  name: string;
  minMd: number;
  minMdFormula: string;
  maxMd: number;
  maxMdFormula: string;
  predictedMd: number;
  predictedMdFormula: string;
  risk: number;
  riskFormula: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  type: Type;
  name: string;
  role: Role;
  minMd: number | null;
  maxMd: number | null;
  predictedMd: number | null;
  predictedMdFormula: string;
  risk: string;
  comment: Comment;
  subtasks?: Task[];
}

export interface Comment {
  text: string;
  isImportant: boolean;
}

export enum Role {
  Empty = '',
  FD = 'FD',
  BD = 'BD',
  MD = 'MD',
  UD = 'UD',
  DO = 'DO',
}

export enum Type {
  Group = 'group',
  Task = 'task',
}

export interface RiskMultiplicator {
  [key: string]: number;
}
