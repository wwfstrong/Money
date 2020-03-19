type RootState = {
  recordList: recordItem[];
  output: string;
  selectedTag: string;
  type: string;
  notes: string;
  payTags: tags;
  incomeTags: tags;
}
type recordItem = {
  tag: string;
  notes: string;
  type: string;
  amount: number;
  createAt?: string;
  id: string | null;
}
type tags = string[]
