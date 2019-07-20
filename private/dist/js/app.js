$(document).ready(() => {
    $('.preventDefault').click(function (e) {
        e.preventDefault();
    });

    /** Show edit field */
    $('.show-field').click(function (e) {
        e.preventDefault();

        let id = $(this).attr('data-id');

        // Hide all inputs, hide all save buttons, disable all inputs, show all descriptions and show all edit buttons
        $('.inv_input').addClass('d-none');
        $('.inv_save').addClass('d-none');
        $('.inv_edit').removeClass('d-none');
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
        $(this).parent().children('.btn-success').removeClass('d-none');
        // Hide current record's edit button
        $(this).addClass('d-none');
    });

    /** content container */
    $('.show-content').click(function (e) {
        e.preventDefault();

        // Show content container
        $('#content-container').show();
        $('#content-container-box').slideDown();

        // Set quantity default value to 1
        $('#quantity').val('1');

        // Change delete text
        let text = $(this).attr('data-text');
        $('#delete-text span.text-italic').text(text);

        let code = $(this).parent().children('.inv_edit').attr('data-id');
        $('#delete_code').val(code);
    });

    // hide content container
    $('#content-container').click(function (e) {
        if (e.target.id === 'btn-cancel') {
            $(this).fadeOut();
            $('#content-container-box').fadeOut();
        }
    });

    /** recover container */
    $('.show-recover').click(function (e) {
        e.preventDefault();

        // Show recover container
        $('#recover-container').show();
        $('#recover-container-box').slideDown();

        // Change recover text
        let text = $(this).attr('data-text');
        $('#recover-text span.text-italic').text(text);

        let code = $(this).attr('data-id');
        $('#recover_code').val(code);
    });

    // hide recover container
    $('#recover-container').click(function (e) {
        if (e.target.id === 'btn-cancel') {
            $(this).fadeOut();
            $('#recover-container-box').fadeOut();
        }
    });

    /** Form container */
    $('.btn-input').click(function (e) {
        e.preventDefault();

        // Show form container
        $('#form-container').show();
        $('#form-container-box').slideDown();
    });

    // hide form container
    $('#form-container').click(function (e) {
        if (e.target.id === 'btn-cancel') {
            $(this).fadeOut();
            $('#form-container-box').fadeOut();
        }
    });

    /** Search */
    $('#search').on('input', function (e) {
        const exp = new RegExp(e.target.value, 'i'),
            records = document.querySelectorAll('table.table tbody tr');

        records.forEach(tr => {
            tr.style.display = 'none';

            if (tr.childNodes[3].childNodes[1].textContent.replace(/\s/g, ' ').search(exp) != -1) {
                tr.style.display = 'table-row';
            }
        });
    });

    /** Stock entry */
    selectEntry = () => {
        let code = document.getElementById('code').value;
        let quantity = document.getElementById('quantity').value;
        let inputCheck = document.querySelector(`input[value="${code}"]`);

        if (!inputCheck) {
            if (code !== '' && quantity !== '') {
                // Check if quantity is less than 1
                if(quantity < 1){
                    document.querySelector('div.alert.alert-danger').innerHTML = `<p class="d-inline-block m-0">
                                                                                    La cantidad no puede ser menor o igual a cero (0)
                                                                                </P>`;
                    document.querySelector('div.alert.alert-danger').classList.remove('d-none');
                    return;
                }

                let description = document.getElementById('inv_' + code).getAttribute('data-description');
                let type = document.getElementById('inv_' + code).getAttribute('data-type');
                let stock = document.getElementById('inv_' + code).getAttribute('data-stock');
                addRow(code, type, description, stock, quantity);
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

    const addRow = (code, type, description, stock, quantity) => {
        let html = `
            <tr>
                <td>
                  <p class="m-0">${code}</p>
                  <input type="hidden" name="code[]" class="form-control" value="${code}">
                  <input type="hidden" name="type[]" class="form-control" value="${type}">
                </td>

                <td>
                  <p class="m-0">${description}</p>
                </td>

                <td>
                  <p class="m-0">${stock}</p>
                  <input type="number" name="previous[]" class="form-control d-none" value="${stock}">
                </td>

                <td class="quantity-children">
                  <p class="m-0">${quantity}</p>
                  <input type="number" name="quantity[]" class="form-control d-none" value="${quantity}">
                </td>

                <td class="action-children">
                  <a href="#" class="btn btn-primary btn-edit" onClick="editQuantity(event)"><i class="lzi pencil"></i></a>
                  <a href="#" class="btn btn-danger" onClick="deleteLine(event)"><i class="lzi delete"></i></a>
                </td>
            </tr>
        `;

        if (code !== '' && description !== '' && quantity !== '') {
            $('table.table tbody').append(html);
            document.querySelector('div.alert.alert-danger').classList.add('d-none');
            document.getElementById('code').value = '';
            document.getElementById('quantity').value = '';
            document.getElementById('content-container').style.display = 'none';
            $('#btn-save').attr('disabled', false);
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
        $('#stock').attr('disabled', true);
        $('#stock-group').slideUp('fast');
        $('.components').attr('disabled', false);
    });
    $('#singular-product').click(() => {
        $('#kit-components-container').addClass('d-none');
        $('#stock').attr('disabled', false);
        $('#stock-group').slideDown('fast');
        $('.components').attr('disabled', true);
    });
    $('#add-kit-component').click(function (e) {
        e.preventDefault();

        let component = $('#kit-components div:first-of-type').html();

        let html = `
            <div class="d-flex">
                ${component}
            </div>
        `;

        $('#kit-components').append(html);
    });
});