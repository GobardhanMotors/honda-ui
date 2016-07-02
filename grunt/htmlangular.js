/**
 * @author michael.ash
 */
module.exports = {
  options : {
    // Task-specific options go here.
    customtags : ['view-selector', 'module',
      'med-expandable-menu-item', 'med-expandable-menu',
      'med-modal','med-table-pager',
      'med-admin-menu','med-task-filter',
      'accordion', 'accordion-group,','accordion-heading',
      'alert','carousel', 'slide','datepicker','pagination','rating','progressbar',
      'tooltip','tooltip-html-unsafe',
      'med-admin-menu-item'
    ],
    customattrs : ['modal-dialog', 'menu', 'heading', 'collapse','popover',
      'popover-placement','popover-title','popover-trigger',
      'tabset', 'tabs','timepicker','typeahead','typeahead','file-reader',
      'datepicker-popup','isOpen'
    ],
    relaxerror : [
      'Element head is missing a required instance of child element title.',
      '}} for attribute href on element a:',
      '}} for attribute max on element input:',
      '}} for attribute value on element input:',
      'columns wide and exceeded the column count established by the first row',
      'Element li not allowed as child of element body',
      'Element img is missing required attribute src.'
    ]
  },
  file : {
    // Target-specific file lists and/or options go here.
    src : ['app/**/*.html', '!app/bower_components/**/*.html' ]
  }
};