export type SharedType = {
  message: string;
};

export function sharedFunction(): SharedType {
  console.log("logging in package1");
  return { message: "Hello from package1" };
}
