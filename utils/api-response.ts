export const createSuccess = (data: any) => {
  return {
    success: true,
    status: 200,
    data: data,
    error: null,
  };
};
export const createFailure = (error: any) => {
  return {
    success: false,
    status: 500,
    data: null,
    error: error,
  };
};
