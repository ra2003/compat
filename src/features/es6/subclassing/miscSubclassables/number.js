let util = require('../../../util.js')

const TYPE = 'miscellaneous subclassables_Number is subclassable'

exports.type = TYPE

/**
 * Detects usage of ES6 Number subclassing.
 */
exports.func = (node, parent) => {
  if (node.type === 'ClassDeclaration' &&
     node.superClass.name === 'Number') {
    return util.createFeature(node.loc, TYPE)
  }
}