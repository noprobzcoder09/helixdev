<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\VideoComplete;
use App\InductionComplete;
use App;
use Carbon\Carbon;

class PdfController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function videoComplete()
    {
        $certification = VideoComplete::find($this->request->id);

        if($certification)
        {

            $pdf = App::make('dompdf.wrapper');
            $filePath = public_path() . "/partials/contrib/certificate_pdf.html";

            return $pdf->loadHTML(self::replace($certification, $filePath))->download('certificate.pdf');
        }
    }

    public function inductionComplete()
    {
        $certification = InductionComplete::find($this->request->id);

        if($certification)
        {

            $pdf = App::make('dompdf.wrapper');
            $filePath = public_path() . "/partials/contrib/certificate_pdf.html";

            return $pdf->loadHTML(self::replace($certification, $filePath))->download('certificate.pdf');
        }
    }

    public static function replace($c, $filePath)
    {


        $title = '';
        $video_title = '';
        if ($c->video) {
            $title = 'SAFETY VIDEO';
            $video_title = $c->video->title;
            // $certificate_image = asset('/'. 'img/safety-video.png';);
            $certificate_image = 'img/safety-video.png';
        } else if($c->induction) {
            $title = 'INDUCTION VIDEO';
            $video_title = $c->induction->title;
            //   $certificate_image = asset('/'. 'img/induction-video.png');
            $certificate_image = 'img/induction-video.png';
        }

        if ($c->employee->company->isSample) {
            //  $image =  asset('/img/client/company-logo.png');
            $image = 'img/client/company-logo.png';
        } else {

            $image = asset('/') . $c->video->employee->logo();
        }

        $formattedDate = Carbon::parse($c->created_at)->toFormattedDateString();

        $target = ['{{title}}', '{{name}}', '{{videoTitle}}', '{{videoCompletedAt}}', '{{image}}', '{{certificate_image}}'];
        $replace = [$title, $c->employee->full_name, $video_title, $formattedDate, $image, $certificate_image];

        $output = str_replace($target, $replace, file_get_contents($filePath));
        return $output;
    }
}
