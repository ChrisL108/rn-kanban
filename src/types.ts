export type KanbanOptions = {
  data: {};
  stickyHeaders: boolean;
  longPressMode: 'drag' | 'menu' | 'custom' | 'none';
  longPressCallback?: Function;
  ColumnHeader?: JSX.Element;
  ColumnRow?: JSX.Element;
  ColumnFooter?: JSX.Element;
};

export type DataItem = {
  id: string | number;
  title: string;
  genre: string;
  mature: boolean;
  country: string;
};

export type ColumnItem = {
  key: string | number;
  values: [DataItem];
};
