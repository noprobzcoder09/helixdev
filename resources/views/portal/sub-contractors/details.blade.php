@extends('layout.portal')

@section('title', 'Client')

@section('content')

    <div class="col-md-12 no-padding">
        <div class="left-container">
            <div class="top-content">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="row">
                        <h4>SUB-CONTRACTORS > DETAILED</h4>
                    </div>
                </div>
                <div class="col-md-6 pull-right">
                    <div class="row btn-action">
                        <button type="button" role="btn" class="btn btn-primary btn-close btn-sub-con pull-right"><i class="fa fa-times" aria-hidden="true"></i> CLOSE</button>
                        <button type="button" role="btn" class="btn btn-primary btn-delete btn-sub-con pull-right"><i class="fa fa-trash-o" aria-hidden="true"></i> DELETE SUB-CONTRACTOR</button>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="col-md-12">
                <div class="row">
                    <div class="bottom-content">
                        <div class="form">
                            <div class="header">
                                <h5>ACME Electrical</h5>
                            </div>
                            <div class="body">
                                <form>
                                    <div class="col-md-8 details-con">
                                        <div class="row">
                                            <div class="details">
                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>Contact:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>James Acme</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>Contact Number:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>0400 000 000</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>Email:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p><a href="mailto:j.acme@acme.com">j.acme@acme.com</a></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>Sole Trader / Company:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>Company</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>Aprroved:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>Yes, By John Janes (12-12-2016)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>Address:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>123 Fake St, Plumpton</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>State:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <p>Vic</p>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <p>Postcode:</p>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <p>3456</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-4 no-padding-l">
                                                            <p><strong>ABN:</strong></p>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>9876543210</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>

                                            <h4>
                                                <strong>Documents</strong>
                                                <span><a href="javascript:void(0)" data-dialog="documentsDialog" class="trigger">Update Documents</a></span>
                                            </h4>

                                            <div class="documents">

                                                <div class="col-md-3 padding-half">
                                                    <a href="javascript:void(0)">
                                                        <div class="img-con">
                                                            <img class="img-responsive" src="{{ url('img/sub-con/document.png') }}">
                                                            <span><img class="icon" src="{{ url('img/sub-con/pdf-icon.png') }}"></span>
                                                        </div>
                                                        <p>Document's File Name<p>
                                                    </a>
                                                </div>

                                                <div class="col-md-3 padding-half">
                                                    <a href="javascript:void(0)">
                                                        <div class="img-con">
                                                            <img class="img-responsive" src="{{ url('img/sub-con/document.png') }}">
                                                            <span><img class="icon" src="{{ url('img/sub-con/pdf-icon.png') }}"></span>
                                                        </div>
                                                        <p>Document's File Name<p>
                                                    </a>
                                                </div>

                                                <div class="col-md-3 padding-half">
                                                    <a href="javascript:void(0)">
                                                        <div class="img-con">
                                                            <img class="img-responsive" src="{{ url('img/sub-con/document.png') }}">
                                                            <span><img class="icon" src="{{ url('img/sub-con/pdf-icon.png') }}"></span>
                                                        </div>
                                                        <p>Document's File Name<p>
                                                    </a>
                                                </div>

                                                <div class="col-md-3 padding-half">
                                                    <a href="javascript:void(0)">
                                                        <div class="img-con">
                                                            <img class="img-responsive" src="{{ url('img/sub-con/document.png') }}">
                                                            <span><img class="icon" src="{{ url('img/sub-con/pdf-icon.png') }}"></span>
                                                        </div>
                                                        <p>Document's File Name<p>
                                                    </a>
                                                </div>

                                                <div class="col-md-3 padding-half">
                                                    <a href="javascript:void(0)">
                                                        <div class="img-con">
                                                            <img class="img-responsive" src="{{ url('img/sub-con/document.png') }}">
                                                            <span><img class="icon" src="{{ url('img/sub-con/pdf-icon.png') }}"></span>
                                                        </div>
                                                        <p>Document's File Name<p>
                                                    </a>
                                                </div>

                                                <div class="clearfix"></div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-4 no-padding-r">

                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="file-con">
                                                    <input class="form-control inputfile" name="file" id="file" type="file">
                                                    <label class="lbl-file" for="file"><span class="img-cont"><img src="{{ url('img/upload-icon.png') }}"></span><span class="img-text">ADD LOGO</span></label>
                                                    <div class="img-con"><img src="{{ url('img/Helix-Solutions-bw.png') }}"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="row btn-action">
                                                <button class="btn btn-primary btn-send-email" role="btn">SEND WELCOME EMAIL</button>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="clearfix"></div>

    <div id="documentsDialog" class="dialog">
        <div class="dialog__overlay"></div>
        <div class="dialog__content">
            <div class="morph-shape">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="none">
                    <rect x="3" y="3" fill="none" width="556" height="276"/>
                </svg>
            </div>
            <div class="dialog-inner">
                <button class="action close-diaglog" data-dialog-close><i class="fa fa-times" aria-hidden="true"></i></button>

                <div class="header">
                    <h2><strong>ACME Electrical Documentation</strong></h2>
                </div>
                <div class="body">
                    <p>Evidence of Documentation</p>

                    <div class="document-con">

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Public Liability:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="btn btnFileUpload">Upload Image/PDF</span>
                                <input type="file" name="public_liability">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Workcover:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="icon"><img class="img-responsive" src="{{ url('img/check-icon.png') }}"></span>
                                <span class="btn btnFileUpload">Upload Ticket</span>
                                <input type="file" name="workcover">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Superannuation:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="btn btnFileUpload">Upload Image/PDF</span>
                                <input type="file" name="superaanuation">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Redundancy:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="btn btnFileUpload">Upload Image/PDF</span>
                                <input type="file" name="redundancy">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Long Services:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="btn btnFileUpload">Upload Image/PDF</span>
                                <input type="file" name="long_services">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Compliance Statements:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="btn btnFileUpload">Upload Image/PDF</span>
                                <input type="file" name="comliance_statements">
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="col-md-6 no-padding-l">
                                <p>Other Documents:</p>
                            </div>
                            <div class="col-md-6 no-padding-r ta-r">
                                <span class="btn btnFileUpload">Upload Image/PDF</span>
                                <input type="file" name="other_documents">
                            </div>
                        </div>

                        <div class="clearfix"></div>
                    </div>

                    <button class="btn btnUpdateDocuments" role="button"><span><img class="img-responsive" src="{{ url('img/arrow-refresh.png') }}"></span> Update Documents</button>

                </div>
            </div>
        </div>
    </div>


@endsection