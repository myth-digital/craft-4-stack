<?php

   return [
      '*' => [
         'imagerUrl' => getenv('SPACES_TRANSFORMS_URL'),
         // 'imagerSystemPath' => getenv('SPACES_BASE_URL') . getenv('SPACES_TRANSFORMS_FOLDER'),
         'fallbackImage' => getenv('PRIMARY_SITE_URL') . 'dist/images/fallback-image.png',
         'cacheEnabled' => true,
         'cacheDuration' => 31536000, // 1 year
         'cacheDurationRemoteFiles' => 31536000, // 1 year
         'jpegQuality' => 100,
         'pngCompressionLevel' => 0,
         'resizeFilter' => 'lanczos',
         'hashPath' => true,
         'useCwebp' => false,
         'cwebpPath' => '/usr/bin/cwebp',
         'cwebpOptions' => '-q 90',
         'optimizeType' => 'job',
         'optimizers' => null,
         'storages' => ['dospaces'],
         'storageConfig' => [
            'dospaces'  => [
               'endpoint' => getenv('SPACES_ENDPOINT'),
               'accessKey' => getenv('SPACES_API_KEY'),
               'secretAccessKey' => getenv('SPACES_SECRET'),
               'region' => getenv('SPACES_REGION'),
               'bucket' => getenv('SPACES_BUCKET'),
               'folder' => 'transforms',
               'requestHeaders' => array(),
            ]
         ],
         'optimizerConfig' => [
            'jpegoptim' => [
               'extensions' => ['jpg'],
               'path' => '/usr/bin/jpegoptim',
               'optionString' => '--strip-all -m90 -o -p'
            ],
            'optipng' => [
               'extensions' => ['png'],
               'path' => '/usr/bin/optipng',
               'optionString' => '-preserve -strip all'
            ],
            'gifsicle' => [
               'extensions' => ['gif'],
               'path' => '/usr/bin/gifsicle',
               'optionString' => '--optimize=3 --colors 256'
            ]
         ]
      ],
      'dev' => [],
      'staging' => [],
      'production' => [
        'optimizers' => ['jpegoptim', 'optipng', 'gifsicle'],
      ]
   ];
