const paginate = (page, limit, totalData) => {
  const pageNumber = parseInt(page) > 0 ? parseInt(page) : 1;
  const pageSize = parseInt(limit) > 0 && parseInt(limit) <= 100 ? parseInt(limit) : 10;
  const offset = (pageNumber - 1) * pageSize;
  const totalPages = Math.ceil(totalData / pageSize);

  return {
    limit: pageSize,
    offset: offset,
    
    data: {
      page: pageNumber,
      limit: pageSize,
      totalData: totalData,
      totalPages: totalPages,
      hasNextPage: pageNumber < totalPages,
      hasPrevPage: pageNumber > 1,
    }
  };
};

module.exports = { paginate };