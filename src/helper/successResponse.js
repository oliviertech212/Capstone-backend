export const successRes = (res, data) => {
  return res.json({
    status: "success",
    data,
  });
};
