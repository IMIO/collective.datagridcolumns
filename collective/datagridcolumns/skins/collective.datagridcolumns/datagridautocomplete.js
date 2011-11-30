/**
 * JavaScript for the ReferenceColumn with autocomplete features
 * 
 * @author keul
 */

jq(document).ready(function() {
	/**
	 * The first time we get the focus, we will enale the autocomplete 
	 */
	jq('.dataGridAutocompleteColumn').live('focus', function() {
		var $this = jq(this);
		if (!$this.data('autocompleteEnabled')) {
			$this.data('autocompleteEnabled', true);
			var contextCall = $this.prevAll('.edit_common').attr('data-context-call') + '/dataGridAutocomplete?aaa=5';
			$this.autocomplete({
				source: contextCall,
				focus: function(event, ui) {
					// $this.prev().val(ui.item.value);
					// $this.val(ui.item.label);
					event.preventDefault();
				},
				select: function(event, ui) {
					$this.prev().val(ui.item.value);
					$this.val(ui.item.label);
					event.preventDefault();					
				}
			});
		}
	});
});
