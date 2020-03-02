const issueTranslations = [
  {
    original: "accesskeys",
    translated: "Ensure every accesskey attribute value is unique"
  },
  {
    original: "area-alt",
    translated: "Ensure <area> elements have alternate text"
  },
  {
    original: "aria-allowed-attr",
    translated: "Ensure ARIA attributes are allowed for an element's role"
  },
  {
    original: "aria-allowed-role",
    translated:
      "Ensure that the role attribute has an appropriate value for the element"
  },
  {
    original: "aria-dpub-role-fallback",
    translated:
      "Ensure that unsupported DPUB roles are only used on elements with implicit fallback roles"
  },
  {
    original: "aria-hidden-body",
    translated: "Ensure aria-hidden='true' is not present on the document body"
  },
  {
    original: "aria-hidden-focus",
    translated: "Ensure aria-hidden elements do not contain focusable elements"
  },
  {
    original: "aria-input-field-name",
    translated: "Ensure every ARIA input field has an accessible name"
  },
  {
    original: "aria-required-attr",
    translated:
      "Ensure elements with ARIA roles have all required ARIA attributes"
  },
  {
    original: "aria-required-children",
    translated:
      "Ensure elements with an ARIA role that require child roles contain them"
  },
  {
    original: "aria-required-parent",
    translated:
      "Ensure elements with an ARIA role that require parent roles are contained by them"
  },
  {
    original: "aria-roles",
    translated: "Ensure all elements with a role attribute use a valid value"
  },
  {
    original: "aria-toggle-field-name",
    translated: "Ensure every ARIA toggle field has an accessible name"
  },
  {
    original: "aria-valid-attr-value",
    translated: "Ensure all ARIA attributes have valid values"
  },
  {
    original: "aria-valid-attr",
    translated:
      "Ensure attributes that begin with aria- are valid ARIA attributes"
  },
  {
    original: "audio-caption",
    translated: "Ensure <audio> elements have captions"
  },
  {
    original: "autocomplete-valid",
    translated:
      "Ensure the autocomplete attribute is correct and suitable for the form field"
  },
  {
    original: "avoid-inline-spacing",
    translated:
      "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets"
  },
  { original: "blink", translated: "Ensure <blink> elements are not used" },
  {
    original: "button-name",
    translated: "Ensure buttons have discernible text"
  },
  {
    original: "bypass",
    translated:
      "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content"
  },
  {
    original: "checkboxgroup",
    translated:
      'Ensure related <input type="checkbox"> elements have a group and that the group designation is consistent'
  },
  {
    original: "color-contrast",
    translated:
      "Ensure the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds"
  },
  {
    original: "css-orientation-lock",
    translated:
      "Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations"
  },
  {
    original: "definition-list",
    translated: "Ensure <dl> elements are structured correctly"
  },
  {
    original: "dlitem",
    translated: "Ensure <dt> and <dd> elements are contained by a <dl>"
  },
  {
    original: "document-title",
    translated: "Ensure each HTML document contains a non-empty <title> element"
  },
  {
    original: "duplicate-id-active",
    translated: "Ensure every id attribute value of active elements is unique"
  },
  {
    original: "duplicate-id-aria",
    translated:
      "Ensure every id attribute value used in ARIA and in labels is unique"
  },
  {
    original: "duplicate-id",
    translated: "Ensure every id attribute value is unique"
  },
  {
    original: "empty-heading",
    translated: "Ensure headings have discernible text"
  },
  {
    original: "focus-order-semantics",
    translated: "Ensure elements in the focus order have an appropriate role"
  },
  {
    original: "form-field-multiple-labels",
    translated: "Ensure form field does not have multiple label elements"
  },
  {
    original: "frame-tested",
    translated:
      "Ensure <iframe> and <frame> elements contain the axe-core script"
  },
  {
    original: "frame-title-unique",
    translated:
      "Ensure <iframe> and <frame> elements contain a unique title attribute"
  },
  {
    original: "frame-title",
    translated:
      "Ensure <iframe> and <frame> elements contain a non-empty title attribute"
  },
  {
    original: "heading-order",
    translated: "Ensure the order of headings is semantically correct"
  },
  {
    original: "hidden-content",
    translated: "Inform users about hidden content"
  },
  {
    original: "html-has-lang",
    translated: "Ensure every HTML document has a lang attribute"
  },
  {
    original: "html-lang-valid",
    translated:
      "Ensure the lang attribute of the <html> element has a valid value"
  },
  {
    original: "html-xml-lang-mismatch",
    translated:
      "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page"
  },
  {
    original: "image-alt",
    translated:
      "Ensure <img> elements have alternate text or a role of none or presentation"
  },
  {
    original: "image-redundant-alt",
    translated: "Ensure image alternative is not repeated as text"
  },
  {
    original: "input-button-name",
    translated: "Ensure that input buttons have discernible text"
  },
  {
    original: "input-image-alt",
    translated: 'Ensure <input type="image"> elements have alternate text'
  },
  {
    original: "label-content-name-mismatch",
    translated:
      "Ensure that elements labelled through their content must have their visible text as part of their accessible name"
  },
  {
    original: "label-title-only",
    translated:
      "Ensure that every form element is not solely labeled using the title or aria-describedby attributes"
  },
  {
    original: "label",
    translated: "Ensure that every form element has a label"
  },
  {
    original: "landmark-banner-is-top-level",
    translated: "Ensure the banner landmark is at top level"
  },
  {
    original: "landmark-complementary-is-top-level",
    translated: "Ensure the complementary landmark or aside is at top level"
  },
  {
    original: "landmark-contentinfo-is-top-level",
    translated: "Ensure the contentinfo landmark is at top level"
  },
  {
    original: "landmark-main-is-top-level",
    translated: "Ensure the main landmark is at top level"
  },
  {
    original: "landmark-no-duplicate-banner",
    translated: "Ensure the document has at most one banner landmark"
  },
  {
    original: "landmark-no-duplicate-contentinfo",
    translated: "Ensure the document has at most one contentinfo landmark"
  },
  {
    original: "landmark-one-main",
    translated:
      "Ensure the document has only one main landmark and each iframe in the page has at most one main landmark"
  },
  {
    original: "landmark-unique",
    translated:
      "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination"
  },
  {
    original: "layout-table",
    translated:
      "Ensure presentational/layout <table> elements do not use <th>, <caption> elements or the summary attribute"
  },
  {
    original: "link-in-text-block",
    translated: "Links can be distinguished without relying on color"
  },
  { original: "link-name", translated: "Ensure links have discernible text" },
  {
    original: "list",
    translated: "Ensure that lists are structured correctly"
  },
  {
    original: "listitem",
    translated: "Ensure <li> elements are used semantically"
  },
  {
    original: "marquee",
    translated: "Ensure <marquee> elements are not used"
  },
  {
    original: "meta-refresh",
    translated: 'Ensure <meta http-equiv="refresh"> is not used'
  },
  {
    original: "meta-viewport-large",
    translated: 'Ensure <meta name="viewport"> can scale a significant amount'
  },
  {
    original: "meta-viewport",
    translated:
      'Ensure <meta name="viewport"> does not disable text scaling and zooming'
  },
  {
    original: "object-alt",
    translated: "Ensure <object> elements have alternate text"
  },
  {
    original: "p-as-heading",
    translated: "Ensure p elements are not used to style headings"
  },
  {
    original: "page-has-heading-one",
    translated:
      "Ensure that the page, or at least one of its frames contains a level-one heading"
  },
  {
    original: "radiogroup",
    translated:
      'Ensure related <input type="radio"> elements have a group and that the group designation is consistent'
  },
  {
    original: "region",
    translated: "Ensure all page content is contained by landmarks"
  },
  {
    original: "role-img-alt",
    translated: "Ensure [role='img'] elements have alternate text"
  },
  {
    original: "scope-attr-valid",
    translated: "Ensure the scope attribute is used correctly on tables"
  },
  {
    original: "scrollable-region-focusable",
    translated:
      "Elements that have scrollable content should be accessible by keyboard"
  },
  {
    original: "server-side-image-map",
    translated: "Ensure that server-side image maps are not used"
  },
  {
    original: "skip-link",
    translated: "Ensure all skip links have a focusable target"
  },
  {
    original: "tabindex",
    translated: "Ensure tabindex attribute values are not greater than 0"
  },
  {
    original: "table-duplicate-name",
    translated: "Ensure that tables do not have the same summary and caption"
  },
  {
    original: "table-fake-caption",
    translated: "Ensure that tables with a caption use the <caption> element"
  },
  {
    original: "td-has-header",
    translated:
      "Ensure that each non-empty data cell in a large table has one or more table headers"
  },
  {
    original: "td-headers-attr",
    translated:
      "Ensure that each cell in a table using the headers refers to another cell in that table"
  },
  {
    original: "th-has-data-cells",
    translated:
      "Ensure that each table header in a data table refers to data cells"
  },
  {
    original: "valid-lang",
    translated: "Ensure lang attributes have valid values"
  },
  {
    original: "video-caption",
    translated: "Ensure <video> elements have captions"
  },
  {
    original: "video-description",
    translated: "Ensure <video> elements have audio descriptions"
  }
];

/**
 * @function translateIssueGrouping
 * @param {String} translateKey
 * @returns {String} the report label translated into a more human readable format
 */
function translateIssueGrouping(translateKey) {
  try {
    const { translated } = issueTranslations.find(
      ({ original }) => original === translateKey
    );

    return translated;
  } catch (error) {
    return translateKey;
  }
}

module.exports = { translateIssueGrouping };
