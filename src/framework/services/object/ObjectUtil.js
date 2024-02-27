function emptyObject(object) {
  Object.keys(object).forEach((prop) => {
    delete object[prop]; // eslint-disable-line no-param-reassign
  });
}

function isObject(object) {
  if (!object) {
    return false;
  }

  if (typeof object !== 'object') {
    return false;
  }

  if (Array.isArray(object)) {
    return false;
  }

  return true;
}

/**
  * Recurse through a nested object. For each node value, form a path string.
  * Use this path string as the key to the node value in the flat object.
  */
function flatten(
  branch,
  flatObject = {},
  pathToLeaf = []
) {
  Object.keys(branch).forEach((key) => {
    const newPathToLeaf = pathToLeaf.concat([key]);

    if (isObject(branch[key])) {
      flatten(
        branch[key],
        flatObject,
        newPathToLeaf
      );
    } else {
      flatObject[newPathToLeaf.join('.')] = branch[key]; // eslint-disable-line no-param-reassign
    }
  });

  return flatObject;
}

export default {
  emptyObject,
  flattenNestedObject: flatten,
  isObject,
};
