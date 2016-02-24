
import React, {
  Component,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Icon,
  IconAsterisk,
  IconCheck,
  IconCog,
  IconEllipsis,
  IconLink,
  IconPaperclip,
} from '../../../framework/framework';

export default class IconExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    function onClick() {
      console.log('Clicked icon.'); // eslint-disable-line no-console
    }

    return (
      <Page title={this.props.route.name}>

        <Example>
          <Text>Icons can be clickable.</Text>
          <Icon
            classes="glyphicons-cogwheel"
            onClick={onClick}
          />
        </Example>

        <Example title="IconEllipsis">
          <Text>Reveal additional options when the user clicks this icon.</Text>
          <IconEllipsis />
        </Example>

        <Example title="IconCog">
          <Text>Allows the user to edit settings when clicked.</Text>
          <IconCog />
        </Example>

        <Example title="IconLink">
          <Text>Created to be used in endpoint modal header.</Text>
          <IconLink />
        </Example>

        <Example title="IconPaperclip">
          <Text>Indicate file attachment.</Text>
          <IconPaperclip />
        </Example>

        <Example title="IconCheck">
          <Text>Created to be used in SummaryControlIconCheck component.</Text>
          <IconCheck />
        </Example>

        <Example title="IconAsterisk">
          <Text>Created to be used in SMX line item modal header.</Text>
          <IconAsterisk />
        </Example>

        <Example title="Glyphicons">
          <Text>CSS has a set of icon classes from the <a href="http://glyphicons.com/" target="_blank">Glyphicons</a> Regular font.</Text>
          <div className="glyphiconsExample">
            <Icon classes="glyphicons-glass" />
            <Icon classes="glyphicons-leaf" />
            <Icon classes="glyphicons-dog" />
            <Icon classes="glyphicons-user" />
            <Icon classes="glyphicons-girl" />
            <Icon classes="glyphicons-car" />
            <Icon classes="glyphicons-user-add" />
            <Icon classes="glyphicons-user-remove" />
            <Icon classes="glyphicons-film" />
            <Icon classes="glyphicons-magic" />
            <Icon classes="glyphicons-envelope" />
            <Icon classes="glyphicons-camera" />
            <Icon classes="glyphicons-heart" />
            <Icon classes="glyphicons-beach-umbrella" />
            <Icon classes="glyphicons-train" />
            <Icon classes="glyphicons-print" />
            <Icon classes="glyphicons-bin" />
            <Icon classes="glyphicons-music" />
            <Icon classes="glyphicons-note" />
            <Icon classes="glyphicons-heart-empty" />
            <Icon classes="glyphicons-home" />
            <Icon classes="glyphicons-snowflake" />
            <Icon classes="glyphicons-fire" />
            <Icon classes="glyphicons-magnet" />
            <Icon classes="glyphicons-parents" />
            <Icon classes="glyphicons-binoculars" />
            <Icon classes="glyphicons-road" />
            <Icon classes="glyphicons-search" />
            <Icon classes="glyphicons-cars" />
            <Icon classes="glyphicons-notes-2" />
            <Icon classes="glyphicons-pencil" />
            <Icon classes="glyphicons-bus" />
            <Icon classes="glyphicons-wifi-alt" />
            <Icon classes="glyphicons-luggage" />
            <Icon classes="glyphicons-old-man" />
            <Icon classes="glyphicons-woman" />
            <Icon classes="glyphicons-file" />
            <Icon classes="glyphicons-coins" />
            <Icon classes="glyphicons-airplane" />
            <Icon classes="glyphicons-notes" />
            <Icon classes="glyphicons-stats" />
            <Icon classes="glyphicons-charts" />
            <Icon classes="glyphicons-pie-chart" />
            <Icon classes="glyphicons-group" />
            <Icon classes="glyphicons-keys" />
            <Icon classes="glyphicons-calendar" />
            <Icon classes="glyphicons-router" />
            <Icon classes="glyphicons-camera-small" />
            <Icon classes="glyphicons-star-empty" />
            <Icon classes="glyphicons-star" />
            <Icon classes="glyphicons-link" />
            <Icon classes="glyphicons-eye-open" />
            <Icon classes="glyphicons-eye-close" />
            <Icon classes="glyphicons-alarm" />
            <Icon classes="glyphicons-clock" />
            <Icon classes="glyphicons-stopwatch" />
            <Icon classes="glyphicons-projector" />
            <Icon classes="glyphicons-history" />
            <Icon classes="glyphicons-truck" />
            <Icon classes="glyphicons-cargo" />
            <Icon classes="glyphicons-compass" />
            <Icon classes="glyphicons-keynote" />
            <Icon classes="glyphicons-paperclip" />
            <Icon classes="glyphicons-power" />
            <Icon classes="glyphicons-lightbulb" />
            <Icon classes="glyphicons-tag" />
            <Icon classes="glyphicons-tags" />
            <Icon classes="glyphicons-cleaning" />
            <Icon classes="glyphicons-ruler" />
            <Icon classes="glyphicons-gift" />
            <Icon classes="glyphicons-umbrella" />
            <Icon classes="glyphicons-book" />
            <Icon classes="glyphicons-bookmark" />
            <Icon classes="glyphicons-wifi" />
            <Icon classes="glyphicons-cup" />
            <Icon classes="glyphicons-stroller" />
            <Icon classes="glyphicons-headphones" />
            <Icon classes="glyphicons-headset" />
            <Icon classes="glyphicons-warning-sign" />
            <Icon classes="glyphicons-signal" />
            <Icon classes="glyphicons-retweet" />
            <Icon classes="glyphicons-refresh" />
            <Icon classes="glyphicons-roundabout" />
            <Icon classes="glyphicons-random" />
            <Icon classes="glyphicons-heat" />
            <Icon classes="glyphicons-repeat" />
            <Icon classes="glyphicons-log-book" />
            <Icon classes="glyphicons-address-book" />
            <Icon classes="glyphicons-building" />
            <Icon classes="glyphicons-eyedropper" />
            <Icon classes="glyphicons-adjust" />
            <Icon classes="glyphicons-tint" />
            <Icon classes="glyphicons-crop" />
            <Icon classes="glyphicons-vector-path-square" />
            <Icon classes="glyphicons-vector-path-circle" />
            <Icon classes="glyphicons-vector-path-polygon" />
            <Icon classes="glyphicons-vector-path-line" />
            <Icon classes="glyphicons-vector-path-curve" />
            <Icon classes="glyphicons-vector-path-all" />
            <Icon classes="glyphicons-font" />
            <Icon classes="glyphicons-italic" />
            <Icon classes="glyphicons-bold" />
            <Icon classes="glyphicons-text-underline" />
            <Icon classes="glyphicons-text-strike" />
            <Icon classes="glyphicons-text-height" />
            <Icon classes="glyphicons-text-width" />
            <Icon classes="glyphicons-text-resize" />
            <Icon classes="glyphicons-left-indent" />
            <Icon classes="glyphicons-right-indent" />
            <Icon classes="glyphicons-align-left" />
            <Icon classes="glyphicons-align-center" />
            <Icon classes="glyphicons-align-right" />
            <Icon classes="glyphicons-justify" />
            <Icon classes="glyphicons-list" />
            <Icon classes="glyphicons-text-smaller" />
            <Icon classes="glyphicons-text-bigger" />
            <Icon classes="glyphicons-embed" />
            <Icon classes="glyphicons-embed-close" />
            <Icon classes="glyphicons-table" />
            <Icon classes="glyphicons-message-full" />
            <Icon classes="glyphicons-message-empty" />
            <Icon classes="glyphicons-message-in" />
            <Icon classes="glyphicons-message-out" />
            <Icon classes="glyphicons-message-plus" />
            <Icon classes="glyphicons-message-minus" />
            <Icon classes="glyphicons-message-ban" />
            <Icon classes="glyphicons-message-flag" />
            <Icon classes="glyphicons-message-lock" />
            <Icon classes="glyphicons-message-new" />
            <Icon classes="glyphicons-inbox" />
            <Icon classes="glyphicons-inbox-plus" />
            <Icon classes="glyphicons-inbox-minus" />
            <Icon classes="glyphicons-inbox-lock" />
            <Icon classes="glyphicons-inbox-in" />
            <Icon classes="glyphicons-inbox-out" />
            <Icon classes="glyphicons-cogwheel" />
            <Icon classes="glyphicons-cogwheels" />
            <Icon classes="glyphicons-picture" />
            <Icon classes="glyphicons-adjust-alt" />
            <Icon classes="glyphicons-database-lock" />
            <Icon classes="glyphicons-database-plus" />
            <Icon classes="glyphicons-database-minus" />
            <Icon classes="glyphicons-database-ban" />
            <Icon classes="glyphicons-folder-open" />
            <Icon classes="glyphicons-folder-plus" />
            <Icon classes="glyphicons-folder-minus" />
            <Icon classes="glyphicons-folder-lock" />
            <Icon classes="glyphicons-folder-flag" />
            <Icon classes="glyphicons-folder-new" />
            <Icon classes="glyphicons-edit" />
            <Icon classes="glyphicons-new-window" />
            <Icon classes="glyphicons-check" />
            <Icon classes="glyphicons-unchecked" />
            <Icon classes="glyphicons-more-windows" />
            <Icon classes="glyphicons-show-big-thumbnails" />
            <Icon classes="glyphicons-show-thumbnails" />
            <Icon classes="glyphicons-show-thumbnails-with-lines" />
            <Icon classes="glyphicons-show-lines" />
            <Icon classes="glyphicons-playlist" />
            <Icon classes="glyphicons-imac" />
            <Icon classes="glyphicons-macbook" />
            <Icon classes="glyphicons-ipad" />
            <Icon classes="glyphicons-iphone" />
            <Icon classes="glyphicons-iphone-transfer" />
            <Icon classes="glyphicons-iphone-exchange" />
            <Icon classes="glyphicons-ipod" />
            <Icon classes="glyphicons-ipod-shuffle" />
            <Icon classes="glyphicons-ear-plugs" />
            <Icon classes="glyphicons-record" />
            <Icon classes="glyphicons-step-backward" />
            <Icon classes="glyphicons-fast-backward" />
            <Icon classes="glyphicons-rewind" />
            <Icon classes="glyphicons-play" />
            <Icon classes="glyphicons-pause" />
            <Icon classes="glyphicons-stop" />
            <Icon classes="glyphicons-forward" />
            <Icon classes="glyphicons-fast-forward" />
            <Icon classes="glyphicons-step-forward" />
            <Icon classes="glyphicons-eject" />
            <Icon classes="glyphicons-facetime-video" />
            <Icon classes="glyphicons-download-alt" />
            <Icon classes="glyphicons-mute" />
            <Icon classes="glyphicons-volume-down" />
            <Icon classes="glyphicons-volume-up" />
            <Icon classes="glyphicons-screenshot" />
            <Icon classes="glyphicons-move" />
            <Icon classes="glyphicons-more" />
            <Icon classes="glyphicons-brightness-reduce" />
            <Icon classes="glyphicons-brightness-increase" />
            <Icon classes="glyphicons-circle-plus" />
            <Icon classes="glyphicons-circle-minus" />
            <Icon classes="glyphicons-circle-remove" />
            <Icon classes="glyphicons-circle-ok" />
            <Icon classes="glyphicons-circle-question-mark" />
            <Icon classes="glyphicons-circle-info" />
            <Icon classes="glyphicons-circle-exclamation-mark" />
            <Icon classes="glyphicons-remove" />
            <Icon classes="glyphicons-ok" />
            <Icon classes="glyphicons-ban" />
            <Icon classes="glyphicons-download" />
            <Icon classes="glyphicons-upload" />
            <Icon classes="glyphicons-shopping-cart" />
            <Icon classes="glyphicons-lock" />
            <Icon classes="glyphicons-unlock" />
            <Icon classes="glyphicons-electricity" />
            <Icon classes="glyphicons-ok-2" />
            <Icon classes="glyphicons-remove-2" />
            <Icon classes="glyphicons-cart-out" />
            <Icon classes="glyphicons-cart-in" />
            <Icon classes="glyphicons-left-arrow" />
            <Icon classes="glyphicons-right-arrow" />
            <Icon classes="glyphicons-down-arrow" />
            <Icon classes="glyphicons-up-arrow" />
            <Icon classes="glyphicons-resize-small" />
            <Icon classes="glyphicons-resize-full" />
            <Icon classes="glyphicons-circle-arrow-left" />
            <Icon classes="glyphicons-circle-arrow-right" />
            <Icon classes="glyphicons-circle-arrow-top" />
            <Icon classes="glyphicons-circle-arrow-down" />
            <Icon classes="glyphicons-play-button" />
            <Icon classes="glyphicons-unshare" />
            <Icon classes="glyphicons-share" />
            <Icon classes="glyphicons-chevron-right" />
            <Icon classes="glyphicons-chevron-left" />
            <Icon classes="glyphicons-bluetooth" />
            <Icon classes="glyphicons-euro" />
            <Icon classes="glyphicons-usd" />
            <Icon classes="glyphicons-gbp" />
            <Icon classes="glyphicons-retweet-2" />
            <Icon classes="glyphicons-moon" />
            <Icon classes="glyphicons-sun" />
            <Icon classes="glyphicons-cloud" />
            <Icon classes="glyphicons-direction" />
            <Icon classes="glyphicons-brush" />
            <Icon classes="glyphicons-pen" />
            <Icon classes="glyphicons-zoom-in" />
            <Icon classes="glyphicons-zoom-out" />
            <Icon classes="glyphicons-pin" />
            <Icon classes="glyphicons-albums" />
            <Icon classes="glyphicons-rotation-lock" />
            <Icon classes="glyphicons-flash" />
            <Icon classes="glyphicons-google-maps" />
            <Icon classes="glyphicons-anchor" />
            <Icon classes="glyphicons-conversation" />
            <Icon classes="glyphicons-chat" />
            <Icon classes="glyphicons-male" />
            <Icon classes="glyphicons-female" />
            <Icon classes="glyphicons-asterisk" />
            <Icon classes="glyphicons-divide" />
            <Icon classes="glyphicons-snorkel-diving" />
            <Icon classes="glyphicons-scuba-diving" />
            <Icon classes="glyphicons-oxygen-bottle" />
            <Icon classes="glyphicons-fins" />
            <Icon classes="glyphicons-fishes" />
            <Icon classes="glyphicons-boat" />
            <Icon classes="glyphicons-delete" />
            <Icon classes="glyphicons-sheriffs-star" />
            <Icon classes="glyphicons-qrcode" />
            <Icon classes="glyphicons-barcode" />
            <Icon classes="glyphicons-pool" />
            <Icon classes="glyphicons-buoy" />
            <Icon classes="glyphicons-spade" />
            <Icon classes="glyphicons-bank" />
            <Icon classes="glyphicons-vcard" />
            <Icon classes="glyphicons-electrical-plug" />
            <Icon classes="glyphicons-flag" />
            <Icon classes="glyphicons-credit-card" />
            <Icon classes="glyphicons-keyboard-wireless" />
            <Icon classes="glyphicons-keyboard-wired" />
            <Icon classes="glyphicons-shield" />
            <Icon classes="glyphicons-ring" />
            <Icon classes="glyphicons-cake" />
            <Icon classes="glyphicons-drink" />
            <Icon classes="glyphicons-beer" />
            <Icon classes="glyphicons-fast-food" />
            <Icon classes="glyphicons-cutlery" />
            <Icon classes="glyphicons-pizza" />
            <Icon classes="glyphicons-birthday-cake" />
            <Icon classes="glyphicons-tablet" />
            <Icon classes="glyphicons-settings" />
            <Icon classes="glyphicons-bullets" />
            <Icon classes="glyphicons-cardio" />
            <Icon classes="glyphicons-t-shirt" />
            <Icon classes="glyphicons-pants" />
            <Icon classes="glyphicons-sweater" />
            <Icon classes="glyphicons-fabric" />
            <Icon classes="glyphicons-leather" />
            <Icon classes="glyphicons-scissors" />
            <Icon classes="glyphicons-bomb" />
            <Icon classes="glyphicons-skull" />
            <Icon classes="glyphicons-celebration" />
            <Icon classes="glyphicons-tea-kettle" />
            <Icon classes="glyphicons-french-press" />
            <Icon classes="glyphicons-coffee-cup" />
            <Icon classes="glyphicons-pot" />
            <Icon classes="glyphicons-grater" />
            <Icon classes="glyphicons-kettle" />
            <Icon classes="glyphicons-hospital" />
            <Icon classes="glyphicons-hospital-h" />
            <Icon classes="glyphicons-microphone" />
            <Icon classes="glyphicons-webcam" />
            <Icon classes="glyphicons-temple-christianity-church" />
            <Icon classes="glyphicons-temple-islam" />
            <Icon classes="glyphicons-temple-hindu" />
            <Icon classes="glyphicons-temple-buddhist" />
            <Icon classes="glyphicons-bicycle" />
            <Icon classes="glyphicons-life-preserver" />
            <Icon classes="glyphicons-share-alt" />
            <Icon classes="glyphicons-comments" />
            <Icon classes="glyphicons-flower" />
            <Icon classes="glyphicons-baseball" />
            <Icon classes="glyphicons-rugby" />
            <Icon classes="glyphicons-ax" />
            <Icon classes="glyphicons-table-tennis" />
            <Icon classes="glyphicons-bowling" />
            <Icon classes="glyphicons-tree-conifer" />
            <Icon classes="glyphicons-tree-deciduous" />
            <Icon classes="glyphicons-more-items" />
            <Icon classes="glyphicons-sort" />
            <Icon classes="glyphicons-filter" />
            <Icon classes="glyphicons-gamepad" />
            <Icon classes="glyphicons-playing-dices" />
            <Icon classes="glyphicons-calculator" />
            <Icon classes="glyphicons-tie" />
            <Icon classes="glyphicons-wallet" />
            <Icon classes="glyphicons-piano" />
            <Icon classes="glyphicons-sampler" />
            <Icon classes="glyphicons-podium" />
            <Icon classes="glyphicons-soccer-ball" />
            <Icon classes="glyphicons-blog" />
            <Icon classes="glyphicons-dashboard" />
            <Icon classes="glyphicons-certificate" />
            <Icon classes="glyphicons-bell" />
            <Icon classes="glyphicons-candle" />
            <Icon classes="glyphicons-pushpin" />
            <Icon classes="glyphicons-iphone-shake" />
            <Icon classes="glyphicons-pin-flag" />
            <Icon classes="glyphicons-turtle" />
            <Icon classes="glyphicons-rabbit" />
            <Icon classes="glyphicons-globe" />
            <Icon classes="glyphicons-briefcase" />
            <Icon classes="glyphicons-hdd" />
            <Icon classes="glyphicons-thumbs-up" />
            <Icon classes="glyphicons-thumbs-down" />
            <Icon classes="glyphicons-hand-right" />
            <Icon classes="glyphicons-hand-left" />
            <Icon classes="glyphicons-hand-up" />
            <Icon classes="glyphicons-hand-down" />
            <Icon classes="glyphicons-fullscreen" />
            <Icon classes="glyphicons-shopping-bag" />
            <Icon classes="glyphicons-book-open" />
            <Icon classes="glyphicons-nameplate" />
            <Icon classes="glyphicons-nameplate-alt" />
            <Icon classes="glyphicons-vases" />
            <Icon classes="glyphicons-bullhorn" />
            <Icon classes="glyphicons-dumbbell" />
            <Icon classes="glyphicons-suitcase" />
            <Icon classes="glyphicons-file-import" />
            <Icon classes="glyphicons-file-export" />
            <Icon classes="glyphicons-bug" />
            <Icon classes="glyphicons-crown" />
            <Icon classes="glyphicons-smoking" />
            <Icon classes="glyphicons-cloud-download" />
            <Icon classes="glyphicons-cloud-upload" />
            <Icon classes="glyphicons-restart" />
            <Icon classes="glyphicons-security-camera" />
            <Icon classes="glyphicons-expand" />
            <Icon classes="glyphicons-collapse" />
            <Icon classes="glyphicons-collapse-top" />
            <Icon classes="glyphicons-globe-af" />
            <Icon classes="glyphicons-global" />
            <Icon classes="glyphicons-spray" />
            <Icon classes="glyphicons-nails" />
            <Icon classes="glyphicons-claw-hammer" />
            <Icon classes="glyphicons-classic-hammer" />
            <Icon classes="glyphicons-hand-saw" />
            <Icon classes="glyphicons-riflescope" />
            <Icon classes="glyphicons-electrical-socket-eu" />
            <Icon classes="glyphicons-electrical-socket-us" />
            <Icon classes="glyphicons-message-forward" />
            <Icon classes="glyphicons-coat-hanger" />
            <Icon classes="glyphicons-dress" />
            <Icon classes="glyphicons-bathrobe" />
            <Icon classes="glyphicons-shirt" />
            <Icon classes="glyphicons-underwear" />
            <Icon classes="glyphicons-log-in" />
            <Icon classes="glyphicons-log-out" />
            <Icon classes="glyphicons-exit" />
            <Icon classes="glyphicons-new-window-alt" />
            <Icon classes="glyphicons-video-sd" />
            <Icon classes="glyphicons-video-hd" />
            <Icon classes="glyphicons-subtitles" />
            <Icon classes="glyphicons-sound-stereo" />
            <Icon classes="glyphicons-sound-dolby" />
            <Icon classes="glyphicons-sound-5-1" />
            <Icon classes="glyphicons-sound-6-1" />
            <Icon classes="glyphicons-sound-7-1" />
            <Icon classes="glyphicons-copyright-mark" />
            <Icon classes="glyphicons-registration-mark" />
            <Icon classes="glyphicons-radar" />
            <Icon classes="glyphicons-skateboard" />
            <Icon classes="glyphicons-golf-course" />
            <Icon classes="glyphicons-sorting" />
            <Icon classes="glyphicons-sort-by-alphabet" />
            <Icon classes="glyphicons-sort-by-alphabet-alt" />
            <Icon classes="glyphicons-sort-by-order" />
            <Icon classes="glyphicons-sort-by-order-alt" />
            <Icon classes="glyphicons-sort-by-attributes" />
            <Icon classes="glyphicons-sort-by-attributes-alt" />
            <Icon classes="glyphicons-compressed" />
            <Icon classes="glyphicons-package" />
            <Icon classes="glyphicons-cloud-plus" />
            <Icon classes="glyphicons-cloud-minus" />
            <Icon classes="glyphicons-disk-save" />
            <Icon classes="glyphicons-disk-open" />
            <Icon classes="glyphicons-disk-saved" />
            <Icon classes="glyphicons-disk-remove" />
            <Icon classes="glyphicons-disk-import" />
            <Icon classes="glyphicons-disk-export" />
            <Icon classes="glyphicons-tower" />
            <Icon classes="glyphicons-send" />
            <Icon classes="glyphicons-git-branch" />
            <Icon classes="glyphicons-git-create" />
            <Icon classes="glyphicons-git-private" />
            <Icon classes="glyphicons-git-delete" />
            <Icon classes="glyphicons-git-merge" />
            <Icon classes="glyphicons-git-pull-request" />
            <Icon classes="glyphicons-git-compare" />
            <Icon classes="glyphicons-git-commit" />
            <Icon classes="glyphicons-construction-cone" />
            <Icon classes="glyphicons-shoe-steps" />
            <Icon classes="glyphicons-plus" />
            <Icon classes="glyphicons-minus" />
            <Icon classes="glyphicons-redo" />
            <Icon classes="glyphicons-undo" />
            <Icon classes="glyphicons-golf" />
            <Icon classes="glyphicons-hockey" />
            <Icon classes="glyphicons-pipe" />
            <Icon classes="glyphicons-wrench" />
            <Icon classes="glyphicons-folder-closed" />
            <Icon classes="glyphicons-phone-alt" />
            <Icon classes="glyphicons-earphone" />
            <Icon classes="glyphicons-floppy-disk" />
            <Icon classes="glyphicons-floppy-saved" />
            <Icon classes="glyphicons-floppy-remove" />
            <Icon classes="glyphicons-floppy-save" />
            <Icon classes="glyphicons-floppy-open" />
            <Icon classes="glyphicons-translate" />
            <Icon classes="glyphicons-fax" />
            <Icon classes="glyphicons-factory" />
            <Icon classes="glyphicons-shop-window" />
            <Icon classes="glyphicons-shop" />
            <Icon classes="glyphicons-kiosk" />
            <Icon classes="glyphicons-kiosk-wheels" />
            <Icon classes="glyphicons-kiosk-light" />
            <Icon classes="glyphicons-kiosk-food" />
            <Icon classes="glyphicons-transfer" />
            <Icon classes="glyphicons-money" />
            <Icon classes="glyphicons-header" />
            <Icon classes="glyphicons-blacksmith" />
            <Icon classes="glyphicons-saw-blade" />
            <Icon classes="glyphicons-basketball" />
            <Icon classes="glyphicons-server" />
            <Icon classes="glyphicons-server-plus" />
            <Icon classes="glyphicons-server-minus" />
            <Icon classes="glyphicons-server-ban" />
            <Icon classes="glyphicons-server-flag" />
            <Icon classes="glyphicons-server-lock" />
            <Icon classes="glyphicons-server-new" />
            <Icon classes="glyphicons-charging-station" />
            <Icon classes="glyphicons-gas-station" />
            <Icon classes="glyphicons-target" />
            <Icon classes="glyphicons-bed-alt" />
            <Icon classes="glyphicons-mosquito-net" />
            <Icon classes="glyphicons-dining-set" />
            <Icon classes="glyphicons-plate-of-food" />
            <Icon classes="glyphicons-hygiene-kit" />
            <Icon classes="glyphicons-blackboard" />
            <Icon classes="glyphicons-marriage" />
            <Icon classes="glyphicons-bucket" />
            <Icon classes="glyphicons-none-color-swatch" />
            <Icon classes="glyphicons-bring-forward" />
            <Icon classes="glyphicons-bring-to-front" />
            <Icon classes="glyphicons-send-backward" />
            <Icon classes="glyphicons-send-to-back" />
            <Icon classes="glyphicons-fit-frame-to-image" />
            <Icon classes="glyphicons-fit-image-to-frame" />
            <Icon classes="glyphicons-multiple-displays" />
            <Icon classes="glyphicons-handshake" />
            <Icon classes="glyphicons-child" />
            <Icon classes="glyphicons-baby-formula" />
            <Icon classes="glyphicons-medicine" />
            <Icon classes="glyphicons-atv-vehicle" />
            <Icon classes="glyphicons-motorcycle" />
            <Icon classes="glyphicons-bed" />
            <Icon classes="glyphicons-tent" />
            <Icon classes="glyphicons-glasses" />
            <Icon classes="glyphicons-sunglasses" />
            <Icon classes="glyphicons-family" />
            <Icon classes="glyphicons-education" />
            <Icon classes="glyphicons-shoes" />
            <Icon classes="glyphicons-map" />
            <Icon classes="glyphicons-cd" />
            <Icon classes="glyphicons-alert" />
            <Icon classes="glyphicons-piggy-bank" />
            <Icon classes="glyphicons-star-half" />
            <Icon classes="glyphicons-cluster" />
            <Icon classes="glyphicons-flowchart" />
            <Icon classes="glyphicons-commodities" />
            <Icon classes="glyphicons-duplicate" />
            <Icon classes="glyphicons-copy" />
            <Icon classes="glyphicons-paste" />
            <Icon classes="glyphicons-bath-bathtub" />
            <Icon classes="glyphicons-bath-shower" />
            <Icon classes="glyphicons-shower" />
            <Icon classes="glyphicons-menu-hamburger" />
            <Icon classes="glyphicons-option-vertical" />
            <Icon classes="glyphicons-option-horizontal" />
            <Icon classes="glyphicons-currency-conversion" />
            <Icon classes="glyphicons-user-ban" />
            <Icon classes="glyphicons-user-lock" />
            <Icon classes="glyphicons-user-flag" />
            <Icon classes="glyphicons-user-asterisk" />
            <Icon classes="glyphicons-user-alert" />
            <Icon classes="glyphicons-user-key" />
            <Icon classes="glyphicons-user-conversation" />
            <Icon classes="glyphicons-database" />
            <Icon classes="glyphicons-database-search" />
            <Icon classes="glyphicons-list-alt" />
            <Icon classes="glyphicons-hazard-sign" />
            <Icon classes="glyphicons-hazard" />
            <Icon classes="glyphicons-stop-sign" />
            <Icon classes="glyphicons-lab" />
            <Icon classes="glyphicons-lab-alt" />
            <Icon classes="glyphicons-ice-cream" />
            <Icon classes="glyphicons-ice-lolly" />
            <Icon classes="glyphicons-ice-lolly-tasted" />
            <Icon classes="glyphicons-invoice" />
            <Icon classes="glyphicons-cart-tick" />
            <Icon classes="glyphicons-hourglass" />
            <Icon classes="glyphicons-cat" />
            <Icon classes="glyphicons-lamp" />
            <Icon classes="glyphicons-scale-classic" />
            <Icon classes="glyphicons-eye-plus" />
            <Icon classes="glyphicons-eye-minus" />
            <Icon classes="glyphicons-quote" />
            <Icon classes="glyphicons-bitcoin" />
            <Icon classes="glyphicons-yen" />
            <Icon classes="glyphicons-ruble" />
            <Icon classes="glyphicons-erase" />
            <Icon classes="glyphicons-podcast" />
            <Icon classes="glyphicons-firework" />
            <Icon classes="glyphicons-scale" />
            <Icon classes="glyphicons-king" />
            <Icon classes="glyphicons-queen" />
            <Icon classes="glyphicons-pawn" />
            <Icon classes="glyphicons-bishop" />
            <Icon classes="glyphicons-knight" />
            <Icon classes="glyphicons-mic-mute" />
            <Icon classes="glyphicons-voicemail" />
            <Icon classes="glyphicons-paragraph" />
            <Icon classes="glyphicons-person-walking" />
            <Icon classes="glyphicons-person-wheelchair" />
            <Icon classes="glyphicons-underground" />
            <Icon classes="glyphicons-car-hov" />
            <Icon classes="glyphicons-car-rental" />
            <Icon classes="glyphicons-transport" />
            <Icon classes="glyphicons-taxi" />
            <Icon classes="glyphicons-ice-cream-no" />
            <Icon classes="glyphicons-uk-rat-u" />
            <Icon classes="glyphicons-uk-rat-pg" />
            <Icon classes="glyphicons-uk-rat-12a" />
            <Icon classes="glyphicons-uk-rat-12" />
            <Icon classes="glyphicons-uk-rat-15" />
            <Icon classes="glyphicons-uk-rat-18" />
            <Icon classes="glyphicons-uk-rat-r18" />
            <Icon classes="glyphicons-tv" />
            <Icon classes="glyphicons-sms" />
            <Icon classes="glyphicons-mms" />
            <Icon classes="glyphicons-us-rat-g" />
            <Icon classes="glyphicons-us-rat-pg" />
            <Icon classes="glyphicons-us-rat-pg-13" />
            <Icon classes="glyphicons-us-rat-restricted" />
            <Icon classes="glyphicons-us-rat-no-one-17" />
            <Icon classes="glyphicons-equalizer" />
            <Icon classes="glyphicons-speakers" />
            <Icon classes="glyphicons-remote-control" />
            <Icon classes="glyphicons-remote-control-tv" />
            <Icon classes="glyphicons-shredder" />
            <Icon classes="glyphicons-folder-heart" />
            <Icon classes="glyphicons-person-running" />
            <Icon classes="glyphicons-person" />
            <Icon classes="glyphicons-voice" />
            <Icon classes="glyphicons-stethoscope" />
            <Icon classes="glyphicons-hotspot" />
            <Icon classes="glyphicons-activity" />
            <Icon classes="glyphicons-watch" />
            <Icon classes="glyphicons-scissors-alt" />
            <Icon classes="glyphicons-car-wheel" />
            <Icon classes="glyphicons-chevron-up" />
            <Icon classes="glyphicons-chevron-down" />
            <Icon classes="glyphicons-superscript" />
            <Icon classes="glyphicons-subscript" />
            <Icon classes="glyphicons-text-size" />
            <Icon classes="glyphicons-text-color" />
            <Icon classes="glyphicons-text-background" />
            <Icon classes="glyphicons-modal-window" />
            <Icon classes="glyphicons-newspaper" />
            <Icon classes="glyphicons-tractor" />
          </div>
        </Example>

      </Page>
    );
  }

}
