<template>
	<p class="color-Normal">
		{{ $t('abouttext1') }}
		<b class="color-Header"> {{ $t('abouttext2') }}</b>
		<span v-if="$i18n.locale === 'en'">,</span>
		{{ $t('abouttext3') }}
		<b class="color-Header"> {{ $t('abouttext4') }}</b>,
		{{ $t('abouttext5') }}
		<b class="color-Header"> {{ $t('abouttext6') }}</b>
		<span v-if="$i18n.locale === 'en'">, </span>
		<span v-else-if="$i18n.locale === 'zh'">、</span>
		<b class="color-Header"> {{ $t('abouttext7') }}</b>
		<span v-if="$i18n.locale === 'en'">,</span>
		<span v-else-if="$i18n.locale === 'zh'">、</span>
		{{ $t('abouttext8') }}
		<b class="color-Header"> {{ $t('abouttext9') }}</b>
		<span v-if="$i18n.locale === 'en'">,</span>
		<span v-else-if="$i18n.locale === 'zh'">、</span>
		{{ $t('abouttext10') }}
	</p>

	<p class="color-Normal mt-4 mb-0" style="min-height: 80px;">
		{{ $t('short-description') }}
	</p>
</template>