<?php
add_filter('acf/rest_api/select_get_fields', 'my_acf_select_get_fields');

function my_acf_select_get_fields($response, $field, $request, $type) {
    $response['choices'] = acf_get_field($field['key'])['choices'];
    return $response;
}
?>