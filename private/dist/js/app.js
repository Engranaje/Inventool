$(document).ready(() => {
    $('.preventDefault').click(function (e) {
        e.preventDefault();
    });

    const data_model_plural = $('#data-table').data('model-plural');
    const data_model_singular = $('#data-table').data('model-singular');
    const article = data_model_singular == 'transacción' ? 'la' : 'el';
    const none = data_model_singular == 'transacción' ? 'ninguna' : 'ningún';
    $('#data-table').DataTable({
        "info": false,
        "columnDefs": [
            {
                "render": function (data, type, row) {
                     return commaSeparateNumber(data);
                },
                "targets": [2]
            },
        ],
        "language": {
            decimal: ".",
            thousands: ",",
            lengthMenu:     `Mostrar _MENU_ ${ data_model_plural  }`,
            emptyTable: `No hay ${ data_model_plural  } para mostrar`,
            loadingRecords: "Cargando...",
            processing: "Procesando...",
            search: "Buscar:",
            info: `Mostrando del _START_ al _END_ de _TOTAL_ ${ data_model_plural  }`,
            infoEmpty: `No se encontró ${ article } ${ data_model_singular }`,
            zeroRecords:    `No se encontró ${ none } ${ data_model_singular }`,
            infoFiltered:   `(filtrado de _MAX_ ${ data_model_plural  })`,
            searchPlaceholder: `Buscar ${ data_model_plural  }`,
            paginate: {
                "first":      "Primera",
                "last":       "Última",
                "next":       "Siguiente",
                "previous":   "Anterior"
            },
        },
    });
    function commaSeparateNumber(val) {
        while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
    }

    // Hide alert message after three seconds
    setTimeout(() => {
        $('.alert-msg').fadeOut();
    }, 3000);

    // Initialize Select2
    $('.select-box').select2();

    // Prevent form from submitting more than once
    $('form').submit(function () {
        $('button[type=submit]').attr('disabled', 'disabled');
    });

    /** Show edit field */
    $('.show-field').click(function (e) {
        e.preventDefault();

        let id = $(this).attr('data-id');

        // Hide all inputs, hide all save buttons, disable all inputs, show all descriptions and show all edit buttons
        $('.inv_input').addClass('d-none');
        $('.inv_save').addClass('d-none-i');
        $('.inv_edit').removeClass('d-none-i');
        $('.inv_p').show();
        $('.inv_input').attr('disabled', true);

        // Show description input
        $(`#inv_${id}`).removeClass('d-none');
        // Hide description paragraph
        $(`#inv_${id}`).parent().children('p').hide();
        // Enable current description input
        $(`#inv_${id}`).attr('disabled', false);
        // Enable current code input
        $(`#inv_code_${id}`).attr('disabled', false);

        // Show current record's save button
        $(this).parent().children('.inv_save').removeClass('d-none-i');
        // Hide current record's edit button
        $(this).addClass('d-none-i');
    });

    /** content container */
    $('.show-content').click(function (e) {
        e.preventDefault();
        let type = $(this).attr('data-type'),
        action = $(this).attr('data-action'),
        record_type = $(this).attr('data-record-type');

        // Show content container
        $(`.content-container[data-type=${type}]`).show();
        $(`.content-container[data-type=${type}] .content-container-box`).slideDown();

        // Set quantity default value to 1
        $('#quantity').val('1');

        // Change form action
        if(action){
            $(`.content-container[data-type=${type}] form`).attr('action', action);
        }

        // Change record type
        if(record_type){
            $(`.content-container[data-type=${type}] .record-type`).text(record_type);
        }

        // Change delete text
        let text = $(this).attr('data-text');
        $('#delete-text span.text-italic').text(text);

        let code = $(this).attr('data-id');
        $('#delete_code').val(code);
    });

    // hide content container
    $('.content-container').click(function (e) {
        if (e.target.classList.contains('btn-cancel')) {
            $(this).fadeOut();
            $('.content-container-box').fadeOut();
        }
    });

    /** recover container */
    $('.show-recover').click(function (e) {
        e.preventDefault();
        let type = $(this).attr('data-type'),
        action = $(this).attr('data-action'),
        record_type = $(this).attr('data-record-type');

        // Change form action
        if(action){
            $(`.recover-container[data-type=${type}] form`).attr('action', action);
        }

        // Change record type
        if(record_type){
            $(`.recover-container[data-type=${type}] .record-type`).text(record_type);
        }

        // Show recover container
        $(`.recover-container[data-type=${type}]`).show();
        $(`.recover-container[data-type=${type}] .recover-container-box`).slideDown();

        // Change recover text
        let text = $(this).attr('data-text');
        $('#recover-text span.text-italic').text(text);

        let code = $(this).attr('data-id');
        $('#recover_code').val(code);
    });

    // hide recover container
    $('.recover-container').click(function (e) {
        if (e.target.classList.contains('btn-cancel')) {
            $(this).fadeOut();
            $('.recover-container-box').fadeOut();
        }
    });

    /** Show menu title at hover */
    $('.show-title').hover(function() {
        $(this).parent().children('.menu-title').show();
    }, function() {
        $(this).parent().children('.menu-title').hide();
    });

    /** Form container */
    $('.btn-input').click(function (e) {
        e.preventDefault();

        // Show form container
        $('.form-container').show();
        $('.form-container-box').slideDown();
    });

    // hide form container
    $('.form-container').click(function (e) {
        if (e.target.classList.contains('btn-cancel')) {
            $(this).fadeOut();
            $('.form-container-box').fadeOut();
        }
    });

    /** Stock entry */
    selectEntry = () => {
        let code = document.getElementById('code').value;
        let quantity = document.getElementById('quantity').value;
        let inputCheck = document.querySelector(`input[name="code[]"][value="${code}"]`);
        let option = $(`#inv_${code}`);

        // Check if element is not inserted already
        if (!inputCheck) {
            if (code !== '' && quantity !== '') {
                // Check if quantity is less than 1
                if (quantity < 1) {
                    document.querySelector('div.alert.alert-danger').innerHTML = `<p class="d-inline-block m-0">
                                                                                    La cantidad no puede ser menor o igual a cero (0)
                                                                                </P>`;
                    document.querySelector('div.alert.alert-danger').classList.remove('d-none');
                    return;
                }

                let description = document.getElementById('inv_' + code).getAttribute('data-description');
                let type = document.getElementById('inv_' + code).getAttribute('data-type');
                let stock = document.getElementById('inv_' + code).getAttribute('data-stock');
                addRow(code, type, description, stock, quantity, option);
            } else {
                document.querySelector('div.alert.alert-danger').innerHTML = `<p class="d-inline-block m-0">
                                                                                    Todos los campos son obligatorios
                                                                                </P>`;
                document.querySelector('div.alert.alert-danger').classList.remove('d-none');
            }
        } else {
            document.querySelector('div.alert.alert-danger').innerHTML = `<p class="d-inline-block m-0">
                                                                                Ya ha seleccionado este artículo
                                                                            </p>`;
            document.querySelector('div.alert.alert-danger').classList.remove('d-none');
        }
    }

    const addRow = (code, type, description, stock, quantity, option) => {
        let html = `
            <tr>
                <td class="code-children">
                  <p class="m-0">${code}</p>
                  <input type="hidden" name="code[]" class="form-control" value="${code}">
                  <input type="hidden" name="types[]" class="form-control" value="${type}">
                </td>

                <td class="description-children">
                  <p class="m-0">${description}</p>
                </td>

                <td class="stock-children">
                  <p class="m-0">${stock}</p>
                  <input type="number" name="previous[]" class="form-control d-none" value="${stock}">
                </td>

                <td class="quantity-children">
                  <p class="m-0">${quantity}</p>
                  <input type="text" data-input-type="number" name="quantity[]" class="form-control d-none" min="0" value="${quantity}">
                </td>

                <td class="action-children">
                  <a href="#" class="btn btn-primary btn-sqr btn-edit" onClick="editQuantity(event)"><i class="lzi pencil"></i></a>
                  <a href="#" class="btn btn-secondary btn-sqr" onClick="deleteLine(event)"><i class="lzi delete"></i></a>
                </td>
            </tr>
        `;

        if (code !== '' && description !== '' && quantity !== '') {
            $('table.table tbody').append(html);
            document.querySelector('div.alert.alert-danger').classList.add('d-none');
            document.getElementById('code').value = '';
            document.getElementById('quantity').value = '';
            $('.content-container').css({ 'display': 'none' });
            $('#btn-save').attr('disabled', false);

            // Remove option from list
            option.remove();

            // Append number control function to added input
            // Append number control function to added input
            $(document).on('keydown', 'input[data-input-type=number]', function (e) {
                numberControl($(this));
            });
        } else {
            document.querySelector('div.alert.alert-danger').classList.remove('d-none');
        }
    }

    editQuantity = e => {
        e.preventDefault();

        if ($(e.target).closest('tr').children('.action-children').children('.btn-edit').hasClass('btn-success')) {
            var quantity = $(e.target).closest('tr').children('.quantity-children').children('input').val();
            $(e.target).closest('tr').children('.quantity-children').children('p').text(quantity);

            $('#btn-save').attr('disabled', false);

            $(e.target).closest('tr').children('.action-children').children('.btn-edit').removeClass('btn-success');
            $(e.target).closest('tr').children('.quantity-children').children('p').removeClass('d-none');
            $(e.target).closest('tr').children('.quantity-children').children('input').addClass('d-none');
            $(e.target).closest('tr').children('.action-children').children('.btn-edit').html('<i class="lzi pencil"></i>');
        } else {
            $(e.target).closest('tr').children('.action-children').children('.btn-edit').addClass('btn-success');
            $(e.target).closest('tr').children('.quantity-children').children('p').addClass('d-none');
            $(e.target).closest('tr').children('.quantity-children').children('input').removeClass('d-none');
            $(e.target).closest('tr').children('.action-children').children('.btn-edit').html('<i class="lzi check"></i>');
        }
    }

    deleteLine = e => {
        e.preventDefault();

        // Recover option
        const code = $(e.target).closest('tr').children('.code-children').children('p').text();
        const type = $(e.target).closest('tr').children('.code-children').children('input[name="type[]"]').val();
        const description = $(e.target).closest('tr').children('.description-children').children('p').text();
        const stock = $(e.target).closest('tr').children('.stock-children').children('p').text();
        const select = $('#code');

        let option = `
        <option value="${code}"
            id="inv_${code}"
            data-description="${description}"
            data-stock="${stock}"
            data-type="${type}">

            ${description}  (${stock})
        </option>
        `;

        select.append(option);

        $(e.target).closest('tr').remove();

        let rows = $('.fh-table table tbody tr').length;

        if (rows <= 0) {
            $('#btn-save').attr('disabled', true);
        } else {
            $('#btn-save').attr('disabled', false);
        }
    }

    /** Add kit components */
    $('#kit-component').click(() => {
        $('#kit-components-container').removeClass('d-none');
        $('#kit-components-container').slideDown('d-none');
        $('#stock').attr('disabled', true);
        $('#stock-group').slideUp('fast');
        $('.components').attr('disabled', false);
    });
    $('#singular-product').click(() => {
        $('#kit-components-container').slideUp('d-none');
        $('#stock').attr('disabled', false);
        $('#stock-group').slideDown('fast');
        $('.components').attr('disabled', true);
    });
    $('#service-product').click(() => {
        $('#kit-components-container').slideUp('d-none');
        $('#stock').attr('disabled', true);
        $('#stock-group').slideUp('fast');
        $('.components').attr('disabled', true);
    });
    $('#add-kit-component').click(function (e) {
        e.preventDefault();

        // Find value of first select to remove selected item from the new component row
        let select = $('#kit-components div:first-of-type select').val();

        // If all components are selected, which can be verified if the first select has only one possible option, then return. If last component's option is not selected, return
        let options = $('#kit-components div:first-of-type select option').length;
        let lastSelect = $('#kit-components div:last-of-type select').val();
        if (options <= 1 || lastSelect == 'null' || lastSelect == null) return;

        // Retrieve first component elements to create new component row
        let component = $('#kit-components div:first-of-type').html();
        let defaultOption = '<option value="null">-- Seleccionar un componente --</option>';

        // Create new component row
        let html = `
            <div class="d-flex">
                ${component}
            </div>
        `;
        $('#kit-components').append(html);
        $('#kit-components div:last-of-type span:last-of-type').remove();

        // Append default option as the first option of the new component
        $('#kit-components div:last-of-type').children('select').prepend(defaultOption);
        // Append delete button to row
        $('#kit-components div:last-of-type').append('<a href="#" class="btn delete-component" onClick="deleteComponent(event)"><i class="lzi delete lzi-danger"></i></a>');

        // Remove first select's selected value from new component
        $(`#kit-components div:last-of-type .components option[value=${select}]`).remove();
        $(`#kit-components div:last-of-type .components`).val('null');
        $(`#kit-components div:last-of-type .components:nth-child(2)`).val('');

        $('.select-box').select2();

        // Append number control function to added input
        let inputs = document.querySelectorAll('input[data-input-type="number"]');
        numberControl(inputs);
    });

    setOption = e => {
        $(e.target).data('val', $(e.target).val());
    };

    removeOption = e => {
        let prev = $(e.target).data('val');

        if (prev != 'null' && prev != undefined && prev != 'undefined' && prev != null) {
            let text = $(e.target).children(`option[value=${prev}]`).text();
            let prevOption = `<option value="${prev}">${text}</option>`;
            $('.components').not($(e.target)).append(prevOption);
        } else {
            $(e.target).children('option[value=null]').remove();
        }

        let select = $(e.target).val();
        let option = $(`.components option[value=${select}]`).not($(e.target).children(`option[value=${select}]`));

        option.remove();
    };

    // Delete kit component row
    deleteComponent = e => {
        e.preventDefault();

        let select = $(e.target).closest('div').children('select').val();
        let text = $(e.target).closest('div').children('select').children(`option[value=${select}]`).text();

        if (select != 'null') {
            let prevOption = `<option value="${select}">${text}</option>`;
            $('.components').append(prevOption);
        }

        $(e.target).closest('div').remove();
    }

    /** Show user dropdown menu */
    $('#user-dropdown').click(function (e) {
        $('.user-dropdown-menu').toggle('fast');
    });
});
