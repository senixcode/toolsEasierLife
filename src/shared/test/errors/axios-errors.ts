import { AxiosError } from "axios";

type ThrowAxiosErrorParams = {
  status?: number;
  data?: unknown;
};

export const throwAxiosError = ({
  status = 400,
  data,
}: ThrowAxiosErrorParams = {}) => {
  return new AxiosError("", "", {}, "", {
    status,
    data,
    statusText: "",
    headers: {},
    config: {},
  });
};
