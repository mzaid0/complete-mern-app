export const validate = (schema) => async (req, res, next) => {
  try {
    const parseData = await schema.parseAsync(req.body);
    req.body = parseData;
    next();
  } catch (err) {
    const error = {
      status: 400,
      message: err.errors[0].message,
    };
    next(error);
  }
};
