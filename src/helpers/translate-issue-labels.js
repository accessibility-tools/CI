const issueTranslations = [
  {
    original: 'accesskeys',
    translated: {
      title: 'Access keys',
      text: 'Ensure every accesskey attribute value is unique'
    }
  },
  {
    original: 'area-alt',
    translated: {
      title: 'Area alternate text',
      text: 'Ensure <area> elements have alternate text'
    }
  },
  {
    original: 'aria-allowed-attr',
    translated: {
      title: 'Aria allowed attributes',
      text: 'Ensure ARIA attributes are allowed for an element\'s role'
    }
  },
  {
    original: 'aria-allowed-role',
    translated: {
      title: 'ARIA role attribute',
      text: 'Ensure that the role attribute has an appropriate value for the element'
    }

  },
  {
    original: 'aria-dpub-role-fallback',
    translated: {
      title: 'ARIA DPUB roles fallback',
      text: 'Ensure that unsupported DPUB roles are only used on elements with implicit fallback roles'
    }
  },
  {
    original: 'aria-hidden-body',
    translated: {
      title: 'ARIA hidden body',
      text: 'Ensure aria-hidden="true" is not present on the document body'
    }
  },
  {
    original: 'aria-hidden-focus',
    translated: {
      title: 'ARIA hidden elements',
      text: 'Ensure aria-hidden elements do not contain focusable elements'
    }
  },
  {
    original: 'aria-input-field-name',
    translated: {
      title: 'ARIA input field name',
      text: 'Ensure every ARIA input field has an accessible name'
    }
  },
  {
    original: 'aria-required-attr',
    translated: {
      title: 'ARIA required attributes',
      text: 'Ensure elements with ARIA roles have all required ARIA attributes'
    }
  },
  {
    original: 'aria-required-children',
    translated: {
      title: 'ARIA required children',
      text: 'Ensure elements with an ARIA role that require child roles contain them'
    }
  },
  {
    original: 'aria-required-parent',
    translated: {
      title: 'ARIA required parent',
      text: 'Ensure elements with an ARIA role that require parent roles are contained by them'
    }
  },
  {
    original: 'aria-roles',
    translated: {
      title: 'ARIA roles valid value',
      text: 'Ensure all elements with a role attribute use a valid value'
    }
  },
  {
    original: 'aria-toggle-field-name',
    translated: {
      title: 'ARIA toggle field',
      text: 'Ensure every ARIA toggle field has an accessible name'
    }
  },
  {
    original: 'aria-valid-attr-value',
    translated: {
      title: 'ARIA attributes value',
      text: 'Ensure all ARIA attributes have valid values'
    }
  },
  {
    original: 'aria-valid-attr',
    translated: {
      title: 'ARIA attributes',
      text: 'Ensure attributes that begin with aria- are valid ARIA attributes'
    }
  },
  {
    original: 'audio-caption',
    translated: {
      title: 'Audio caption',
      text: 'Ensure <audio> elements have captions'
    }
  },
  {
    original: 'autocomplete-valid',
    translated: {
      title: 'Autocomplete attribute',
      text: 'Ensure the autocomplete attribute is correct and suitable for the form field'
    }
  },
  {
    original: 'avoid-inline-spacing',
    translated: {
      title: 'Inline spacing',
      text: 'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets'
    }
  },
  {
    original: 'blink',
    translated: {
      title: 'Blink element',
      text: 'Ensure <blink> elements are not used'
    }
  },
  {
    original: 'button-name',
    translated: {
      title: 'Button name',
      text: 'Ensure buttons have discernible text'
    }
  },
  {
    original: 'bypass',
    translated: {
      title: 'Bypass',
      text: 'Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content'
    }
  },
  {
    original: 'checkboxgroup',
    translated: {
      title: 'Checkboxgroup',
      text: 'Ensure related <input type="checkbox"> elements have a group and that the group designation is consistent'
    }
  },
  {
    original: 'color-contrast',
    translated: {
      title: 'Color contrast',
      text: 'Ensure the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds'
    }
  },
  {
    original: 'css-orientation-lock',
    translated: {
      title: 'CSS orientation lock',
      text: 'Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations'
    }
  },
  {
    original: 'definition-list',
    translated: {
      title: 'Definition list',
      text: 'Ensure <dl> elements are structured correctly'
    }
  },
  {
    original: 'dlitem',
    translated: {
      title: 'DL item',
      text: 'Ensure <dt> and <dd> elements are contained by a <dl>'
    }
  },
  {
    original: 'document-title',
    translated: {
      title: 'Document title',
      text: 'Ensure each HTML document contains a non-empty <title> element'
    }
  },
  {
    original: 'duplicate-id-active',
    translated: {
      title: 'Active elements id',
      text: 'Ensure every id attribute value of active elements is unique'
    }
  },
  {
    original: 'duplicate-id-aria',
    translated: {
      title: 'Duplicated ARIA id',
      text: 'Ensure every id attribute value used in ARIA and in labels is unique'
    }
  },
  {
    original: 'duplicate-id',
    translated: {
      title: 'Duplicated id',
      text: 'Ensure every id attribute value is unique'
    }
  },
  {
    original: 'empty-heading',
    translated: {
      title: 'Empty heading',
      text: 'Ensure headings have discernible text'
    }
  },
  {
    original: 'focus-order-semantics',
    translated: {
      title: 'Focus order semantics',
      text: 'Ensure elements in the focus order have an appropriate role'
    }
  },
  {
    original: 'form-field-multiple-labels',
    translated: {
      title: 'Multiple form field labels',
      text: 'Ensure form field does not have multiple label elements'
    }
  },
  {
    original: 'frame-tested',
    translated: {
      title: 'Frame tested',
      text: 'Ensure <iframe> and <frame> elements contain the axe-core script'
    }
  },
  {
    original: 'frame-title-unique',
    translated: {
      title: 'Unique frame title',
      text: 'Ensure <iframe> and <frame> elements contain a unique title attribute'
    }
  },
  {
    original: 'frame-title',
    translated: {
      title: 'Frame title',
      text: 'Ensure <iframe> and <frame> elements contain a non-empty title attribute'
    }
  },
  {
    original: 'heading-order',
    translated: {
      title: 'Heading order',
      text: 'Ensure the order of headings is semantically correct'
    }
  },
  {
    original: 'hidden-content',
    translated: {
      title: 'Hidden content',
      text: 'Inform users about hidden content'
    }
  },
  {
    original: 'html-has-lang',
    translated: {
      title: 'Document lang',
      text: 'Ensure every HTML document has a lang attribute'
    }
  },
  {
    original: 'html-lang-valid',
    translated: {
      title: 'Valid document lang',
      text: 'Ensure the lang attribute of the <html> element has a valid value'
    }
  },
  {
    original: 'html-xml-lang-mismatch',
    translated: {
      title: 'Document lang mismatch',
      text: 'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page'
    }
  },
  {
    original: 'image-alt',
    translated: {
      title: 'Image alternate text',
      text: 'Ensure <img> elements have alternate text or a role of none or presentation'
    }
  },
  {
    original: 'image-redundant-alt',
    translated: {
      title: 'Redundant image alternative',
      text: 'Ensure image alternative is not repeated as text'
    }
  },
  {
    original: 'input-button-name',
    translated: {
      title: 'Input button name',
      text: 'Ensure that input buttons have discernible text'
    }
  },
  {
    original: 'input-image-alt',
    translated: {
      title: 'Input image alternate text',
      text: 'Ensure <input type="image"> elements have alternate text'
    }
  },
  {
    original: 'label-content-name-mismatch',
    translated: {
      title: 'Label content name mismatch',
      text: 'Ensure that elements labelled through their content must have their visible text as part of their accessible name'
    }
  },
  {
    original: 'label-title-only',
    translated: {
      title: 'Label title only',
      text: 'Ensure that every form element is not solely labeled using the title or aria-describedby attributes'
    }
  },
  {
    original: 'label',
    translated: {
      title: 'Labels in a form',
      text: 'Ensure that every form element has a label'
    }
  },
  {
    original: 'landmark-banner-is-top-level',
    translated: {
      title: 'Banner landmark position',
      text: 'Ensure the banner landmark is at top level'
    }
  },
  {
    original: 'landmark-complementary-is-top-level',
    translated: {
      title: 'Complementary landmark and aside position',
      text: 'Ensure the complementary landmark or aside is at top level'
    }
  },
  {
    original: 'landmark-contentinfo-is-top-level',
    translated: {
      title: 'Contentinfo landmark position',
      text: 'Ensure the contentinfo landmark is at top level'
    }
  },
  {
    original: 'landmark-main-is-top-level',
    translated: {
      title: 'Landmark position',
      text: 'Ensure the main landmark is at top level'
    }
  },
  {
    original: 'landmark-no-duplicate-banner',
    translated: {
      title: 'Banner landmark',
      text: 'Ensure the document has at most one banner landmark'
    }
  },
  {
    original: 'landmark-no-duplicate-contentinfo',
    translated: {
      title: 'One contentinfo landmark',
      text: 'Ensure the document has at most one contentinfo landmark'
    }
  },
  {
    original: 'landmark-one-main',
    translated: {
      title: 'Main landmark',
      text: 'Ensure the document has only one main landmark and each iframe in the page has at most one main landmark'
    }
  },
  {
    original: 'landmark-unique',
    translated: {
      title: 'Unique landmarks',
      text: 'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination'
    }
  },
  {
    original: 'layout-table',
    translated: {
      title: 'Table layout',
      text: 'Ensure presentational/layout <table> elements do not use <th>, <caption> elements or the summary attribute'
    }
  },
  {
    original: 'link-in-text-block',
    translated: {
      title: 'Link representation',
      text: 'Links can be distinguished without relying on color'
    }
  },
  {
    original: 'link-name',
    translated: {
      title: 'Link name',
      text: 'Ensure links have discernible text'
    }
  },
  {
    original: 'list',
    translated: {
      title: 'List structure',
      text: 'Ensure that lists are structured correctly'
    }
  },
  {
    original: 'listitem',
    translated: {
      title: 'Listitem',
      text: 'Ensure <li> elements are used semantically'
    }
  },
  {
    original: 'marquee',
    translated: {
      title: 'Marquee usage',
      text: 'Ensure <marquee> elements are not used'
    }
  },
  {
    original: 'meta-refresh',
    translated: {
      title: 'Refresh usage',
      text: 'Ensure <meta http-equiv="refresh"> is not used'
    }
  },
  {
    original: 'meta-viewport-large',
    translated: {
      title: 'Large scale',
      text: 'Ensure <meta name="viewport"> can scale a significant amount'
    }
  },
  {
    original: 'meta-viewport',
    translated: {
      title: 'Scaling and zooming',
      text: 'Ensure <meta name="viewport"> does not disable text scaling and zooming'
    }
  },
  {
    original: 'object-alt',
    translated: {
      title: 'Object alternate text',
      text: 'Ensure <object> elements have alternate text'
    }
  },
  {
    original: 'p-as-heading',
    translated: {
      title: 'P elements as heading',
      text: 'Ensure p elements are not used to style headings'
    }
  },
  {
    original: 'page-has-heading-one',
    translated: {
      title: 'Level-one heading',
      text: 'Ensure that the page, or at least one of its frames contains a level-one heading'
    }
  },
  {
    original: 'radiogroup',
    translated: {
      title: 'Radiogroup',
      text: 'Ensure related <input type="radio"> elements have a group and that the group designation is consistent'
    }
  },
  {
    original: 'region',
    translated: {
      title: 'Region',
      text: 'Ensure all page content is contained by landmarks'
    }
  },
  {
    original: 'role-img-alt',
    translated: {
      title: 'Role image alternate text',
      text: 'Ensure [role="img"] elements have alternate text'
    }
  },
  {
    original: 'scope-attr-valid',
    translated: {
      title: 'Scope attribute',
      text: 'Ensure the scope attribute is used correctly on tables'
    }
  },
  {
    original: 'scrollable-region-focusable',
    translated: {
      title: 'Scrollable content',
      text: 'Elements that have scrollable content should be accessible by keyboard'
    }
  },
  {
    original: 'server-side-image-map',
    translated: {
      title: 'Server side image maps',
      text: 'Ensure that server-side image maps are not used'
    }
  },
  {
    original: 'skip-link',
    translated: {
      title: 'Skip link',
      text: 'Ensure all skip links have a focusable target'
    }
  },
  {
    original: 'tabindex',
    translated: {
      title: 'Tabindex',
      text: 'Ensure tabindex attribute values are not greater than 0'
    }
  },
  {
    original: 'table-duplicate-name',
    translated: {
      title: 'Table duplicate names',
      text: 'Ensure that tables do not have the same summary and caption'
    }
  },
  {
    original: 'table-fake-caption',
    translated: {
      title: 'Table fake caption',
      text: 'Ensure that tables with a caption use the <caption> element'
    }
  },
  {
    original: 'td-has-header',
    translated: {
      title: 'Table cell header',
      text: 'Ensure that each non-empty data cell in a large table has one or more table headers'
    }
  },
  {
    original: 'td-headers-attr',
    translated: {
      title: 'Table cell headers attribute',
      text: 'Ensure that each cell in a table using the headers refers to another cell in that table'
    }
  },
  {
    original: 'th-has-data-cells',
    translated: {
      title: 'Table header',
      text: 'Ensure that each table header in a data table refers to data cells'
    }
  },
  {
    original: 'valid-lang',
    translated: {
      title: 'Valid lang attributes',
      text: 'Ensure lang attributes have valid values'
    }
  },
  {
    original: 'video-caption',
    translated: {
      title: 'Video caption',
      text: 'Ensure <video> elements have captions'
    }
  },
  {
    original: 'video-description',
    translated: {
      title: 'Video description',
      text: 'Ensure <video> elements have audio descriptions'
    }
  }
];

/**
 * @function translateIssueGrouping
 * @param {String} translateKey
 * @returns {Object} the report label translated into a more human readable format
 */
function translateIssueGrouping(translateKey) {
  try {
    const { translated } = issueTranslations.find(
      ({ original }) => original === translateKey
    );

    return translated;
  } catch (error) {
    return { title: translateKey, text: translateKey };
  }
}

module.exports = { translateIssueGrouping };
