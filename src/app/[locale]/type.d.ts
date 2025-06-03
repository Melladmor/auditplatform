export type ParamsIdT<T extends string = "id"> = {
  params: Promise<Record<T, string>>;
};
