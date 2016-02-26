
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
            className="glyphicons-cogwheel"
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
          <Text>Suitable for modal header.</Text>
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
          <Text>Suitable for modal header.</Text>
          <IconAsterisk />
        </Example>

        <Example title="Glyphicons">
          <Text>CSS has a set of icon classes from the <a href="http://glyphicons.com/" target="_blank">Glyphicons</a> Regular font.</Text>
          <div className="glyphiconsExample">
            <Icon className="glyphicons-glass" />
            <Icon className="glyphicons-leaf" />
            <Icon className="glyphicons-dog" />
            <Icon className="glyphicons-user" />
            <Icon className="glyphicons-girl" />
            <Icon className="glyphicons-car" />
            <Icon className="glyphicons-user-add" />
            <Icon className="glyphicons-user-remove" />
            <Icon className="glyphicons-film" />
            <Icon className="glyphicons-magic" />
            <Icon className="glyphicons-envelope" />
            <Icon className="glyphicons-camera" />
            <Icon className="glyphicons-heart" />
            <Icon className="glyphicons-beach-umbrella" />
            <Icon className="glyphicons-train" />
            <Icon className="glyphicons-print" />
            <Icon className="glyphicons-bin" />
            <Icon className="glyphicons-music" />
            <Icon className="glyphicons-note" />
            <Icon className="glyphicons-heart-empty" />
            <Icon className="glyphicons-home" />
            <Icon className="glyphicons-snowflake" />
            <Icon className="glyphicons-fire" />
            <Icon className="glyphicons-magnet" />
            <Icon className="glyphicons-parents" />
            <Icon className="glyphicons-binoculars" />
            <Icon className="glyphicons-road" />
            <Icon className="glyphicons-search" />
            <Icon className="glyphicons-cars" />
            <Icon className="glyphicons-notes-2" />
            <Icon className="glyphicons-pencil" />
            <Icon className="glyphicons-bus" />
            <Icon className="glyphicons-wifi-alt" />
            <Icon className="glyphicons-luggage" />
            <Icon className="glyphicons-old-man" />
            <Icon className="glyphicons-woman" />
            <Icon className="glyphicons-file" />
            <Icon className="glyphicons-coins" />
            <Icon className="glyphicons-airplane" />
            <Icon className="glyphicons-notes" />
            <Icon className="glyphicons-stats" />
            <Icon className="glyphicons-charts" />
            <Icon className="glyphicons-pie-chart" />
            <Icon className="glyphicons-group" />
            <Icon className="glyphicons-keys" />
            <Icon className="glyphicons-calendar" />
            <Icon className="glyphicons-router" />
            <Icon className="glyphicons-camera-small" />
            <Icon className="glyphicons-star-empty" />
            <Icon className="glyphicons-star" />
            <Icon className="glyphicons-link" />
            <Icon className="glyphicons-eye-open" />
            <Icon className="glyphicons-eye-close" />
            <Icon className="glyphicons-alarm" />
            <Icon className="glyphicons-clock" />
            <Icon className="glyphicons-stopwatch" />
            <Icon className="glyphicons-projector" />
            <Icon className="glyphicons-history" />
            <Icon className="glyphicons-truck" />
            <Icon className="glyphicons-cargo" />
            <Icon className="glyphicons-compass" />
            <Icon className="glyphicons-keynote" />
            <Icon className="glyphicons-paperclip" />
            <Icon className="glyphicons-power" />
            <Icon className="glyphicons-lightbulb" />
            <Icon className="glyphicons-tag" />
            <Icon className="glyphicons-tags" />
            <Icon className="glyphicons-cleaning" />
            <Icon className="glyphicons-ruler" />
            <Icon className="glyphicons-gift" />
            <Icon className="glyphicons-umbrella" />
            <Icon className="glyphicons-book" />
            <Icon className="glyphicons-bookmark" />
            <Icon className="glyphicons-wifi" />
            <Icon className="glyphicons-cup" />
            <Icon className="glyphicons-stroller" />
            <Icon className="glyphicons-headphones" />
            <Icon className="glyphicons-headset" />
            <Icon className="glyphicons-warning-sign" />
            <Icon className="glyphicons-signal" />
            <Icon className="glyphicons-retweet" />
            <Icon className="glyphicons-refresh" />
            <Icon className="glyphicons-roundabout" />
            <Icon className="glyphicons-random" />
            <Icon className="glyphicons-heat" />
            <Icon className="glyphicons-repeat" />
            <Icon className="glyphicons-log-book" />
            <Icon className="glyphicons-address-book" />
            <Icon className="glyphicons-building" />
            <Icon className="glyphicons-eyedropper" />
            <Icon className="glyphicons-adjust" />
            <Icon className="glyphicons-tint" />
            <Icon className="glyphicons-crop" />
            <Icon className="glyphicons-vector-path-square" />
            <Icon className="glyphicons-vector-path-circle" />
            <Icon className="glyphicons-vector-path-polygon" />
            <Icon className="glyphicons-vector-path-line" />
            <Icon className="glyphicons-vector-path-curve" />
            <Icon className="glyphicons-vector-path-all" />
            <Icon className="glyphicons-font" />
            <Icon className="glyphicons-italic" />
            <Icon className="glyphicons-bold" />
            <Icon className="glyphicons-text-underline" />
            <Icon className="glyphicons-text-strike" />
            <Icon className="glyphicons-text-height" />
            <Icon className="glyphicons-text-width" />
            <Icon className="glyphicons-text-resize" />
            <Icon className="glyphicons-left-indent" />
            <Icon className="glyphicons-right-indent" />
            <Icon className="glyphicons-align-left" />
            <Icon className="glyphicons-align-center" />
            <Icon className="glyphicons-align-right" />
            <Icon className="glyphicons-justify" />
            <Icon className="glyphicons-list" />
            <Icon className="glyphicons-text-smaller" />
            <Icon className="glyphicons-text-bigger" />
            <Icon className="glyphicons-embed" />
            <Icon className="glyphicons-embed-close" />
            <Icon className="glyphicons-table" />
            <Icon className="glyphicons-message-full" />
            <Icon className="glyphicons-message-empty" />
            <Icon className="glyphicons-message-in" />
            <Icon className="glyphicons-message-out" />
            <Icon className="glyphicons-message-plus" />
            <Icon className="glyphicons-message-minus" />
            <Icon className="glyphicons-message-ban" />
            <Icon className="glyphicons-message-flag" />
            <Icon className="glyphicons-message-lock" />
            <Icon className="glyphicons-message-new" />
            <Icon className="glyphicons-inbox" />
            <Icon className="glyphicons-inbox-plus" />
            <Icon className="glyphicons-inbox-minus" />
            <Icon className="glyphicons-inbox-lock" />
            <Icon className="glyphicons-inbox-in" />
            <Icon className="glyphicons-inbox-out" />
            <Icon className="glyphicons-cogwheel" />
            <Icon className="glyphicons-cogwheels" />
            <Icon className="glyphicons-picture" />
            <Icon className="glyphicons-adjust-alt" />
            <Icon className="glyphicons-database-lock" />
            <Icon className="glyphicons-database-plus" />
            <Icon className="glyphicons-database-minus" />
            <Icon className="glyphicons-database-ban" />
            <Icon className="glyphicons-folder-open" />
            <Icon className="glyphicons-folder-plus" />
            <Icon className="glyphicons-folder-minus" />
            <Icon className="glyphicons-folder-lock" />
            <Icon className="glyphicons-folder-flag" />
            <Icon className="glyphicons-folder-new" />
            <Icon className="glyphicons-edit" />
            <Icon className="glyphicons-new-window" />
            <Icon className="glyphicons-check" />
            <Icon className="glyphicons-unchecked" />
            <Icon className="glyphicons-more-windows" />
            <Icon className="glyphicons-show-big-thumbnails" />
            <Icon className="glyphicons-show-thumbnails" />
            <Icon className="glyphicons-show-thumbnails-with-lines" />
            <Icon className="glyphicons-show-lines" />
            <Icon className="glyphicons-playlist" />
            <Icon className="glyphicons-imac" />
            <Icon className="glyphicons-macbook" />
            <Icon className="glyphicons-ipad" />
            <Icon className="glyphicons-iphone" />
            <Icon className="glyphicons-iphone-transfer" />
            <Icon className="glyphicons-iphone-exchange" />
            <Icon className="glyphicons-ipod" />
            <Icon className="glyphicons-ipod-shuffle" />
            <Icon className="glyphicons-ear-plugs" />
            <Icon className="glyphicons-record" />
            <Icon className="glyphicons-step-backward" />
            <Icon className="glyphicons-fast-backward" />
            <Icon className="glyphicons-rewind" />
            <Icon className="glyphicons-play" />
            <Icon className="glyphicons-pause" />
            <Icon className="glyphicons-stop" />
            <Icon className="glyphicons-forward" />
            <Icon className="glyphicons-fast-forward" />
            <Icon className="glyphicons-step-forward" />
            <Icon className="glyphicons-eject" />
            <Icon className="glyphicons-facetime-video" />
            <Icon className="glyphicons-download-alt" />
            <Icon className="glyphicons-mute" />
            <Icon className="glyphicons-volume-down" />
            <Icon className="glyphicons-volume-up" />
            <Icon className="glyphicons-screenshot" />
            <Icon className="glyphicons-move" />
            <Icon className="glyphicons-more" />
            <Icon className="glyphicons-brightness-reduce" />
            <Icon className="glyphicons-brightness-increase" />
            <Icon className="glyphicons-circle-plus" />
            <Icon className="glyphicons-circle-minus" />
            <Icon className="glyphicons-circle-remove" />
            <Icon className="glyphicons-circle-ok" />
            <Icon className="glyphicons-circle-question-mark" />
            <Icon className="glyphicons-circle-info" />
            <Icon className="glyphicons-circle-exclamation-mark" />
            <Icon className="glyphicons-remove" />
            <Icon className="glyphicons-ok" />
            <Icon className="glyphicons-ban" />
            <Icon className="glyphicons-download" />
            <Icon className="glyphicons-upload" />
            <Icon className="glyphicons-shopping-cart" />
            <Icon className="glyphicons-lock" />
            <Icon className="glyphicons-unlock" />
            <Icon className="glyphicons-electricity" />
            <Icon className="glyphicons-ok-2" />
            <Icon className="glyphicons-remove-2" />
            <Icon className="glyphicons-cart-out" />
            <Icon className="glyphicons-cart-in" />
            <Icon className="glyphicons-left-arrow" />
            <Icon className="glyphicons-right-arrow" />
            <Icon className="glyphicons-down-arrow" />
            <Icon className="glyphicons-up-arrow" />
            <Icon className="glyphicons-resize-small" />
            <Icon className="glyphicons-resize-full" />
            <Icon className="glyphicons-circle-arrow-left" />
            <Icon className="glyphicons-circle-arrow-right" />
            <Icon className="glyphicons-circle-arrow-top" />
            <Icon className="glyphicons-circle-arrow-down" />
            <Icon className="glyphicons-play-button" />
            <Icon className="glyphicons-unshare" />
            <Icon className="glyphicons-share" />
            <Icon className="glyphicons-chevron-right" />
            <Icon className="glyphicons-chevron-left" />
            <Icon className="glyphicons-bluetooth" />
            <Icon className="glyphicons-euro" />
            <Icon className="glyphicons-usd" />
            <Icon className="glyphicons-gbp" />
            <Icon className="glyphicons-retweet-2" />
            <Icon className="glyphicons-moon" />
            <Icon className="glyphicons-sun" />
            <Icon className="glyphicons-cloud" />
            <Icon className="glyphicons-direction" />
            <Icon className="glyphicons-brush" />
            <Icon className="glyphicons-pen" />
            <Icon className="glyphicons-zoom-in" />
            <Icon className="glyphicons-zoom-out" />
            <Icon className="glyphicons-pin" />
            <Icon className="glyphicons-albums" />
            <Icon className="glyphicons-rotation-lock" />
            <Icon className="glyphicons-flash" />
            <Icon className="glyphicons-google-maps" />
            <Icon className="glyphicons-anchor" />
            <Icon className="glyphicons-conversation" />
            <Icon className="glyphicons-chat" />
            <Icon className="glyphicons-male" />
            <Icon className="glyphicons-female" />
            <Icon className="glyphicons-asterisk" />
            <Icon className="glyphicons-divide" />
            <Icon className="glyphicons-snorkel-diving" />
            <Icon className="glyphicons-scuba-diving" />
            <Icon className="glyphicons-oxygen-bottle" />
            <Icon className="glyphicons-fins" />
            <Icon className="glyphicons-fishes" />
            <Icon className="glyphicons-boat" />
            <Icon className="glyphicons-delete" />
            <Icon className="glyphicons-sheriffs-star" />
            <Icon className="glyphicons-qrcode" />
            <Icon className="glyphicons-barcode" />
            <Icon className="glyphicons-pool" />
            <Icon className="glyphicons-buoy" />
            <Icon className="glyphicons-spade" />
            <Icon className="glyphicons-bank" />
            <Icon className="glyphicons-vcard" />
            <Icon className="glyphicons-electrical-plug" />
            <Icon className="glyphicons-flag" />
            <Icon className="glyphicons-credit-card" />
            <Icon className="glyphicons-keyboard-wireless" />
            <Icon className="glyphicons-keyboard-wired" />
            <Icon className="glyphicons-shield" />
            <Icon className="glyphicons-ring" />
            <Icon className="glyphicons-cake" />
            <Icon className="glyphicons-drink" />
            <Icon className="glyphicons-beer" />
            <Icon className="glyphicons-fast-food" />
            <Icon className="glyphicons-cutlery" />
            <Icon className="glyphicons-pizza" />
            <Icon className="glyphicons-birthday-cake" />
            <Icon className="glyphicons-tablet" />
            <Icon className="glyphicons-settings" />
            <Icon className="glyphicons-bullets" />
            <Icon className="glyphicons-cardio" />
            <Icon className="glyphicons-t-shirt" />
            <Icon className="glyphicons-pants" />
            <Icon className="glyphicons-sweater" />
            <Icon className="glyphicons-fabric" />
            <Icon className="glyphicons-leather" />
            <Icon className="glyphicons-scissors" />
            <Icon className="glyphicons-bomb" />
            <Icon className="glyphicons-skull" />
            <Icon className="glyphicons-celebration" />
            <Icon className="glyphicons-tea-kettle" />
            <Icon className="glyphicons-french-press" />
            <Icon className="glyphicons-coffee-cup" />
            <Icon className="glyphicons-pot" />
            <Icon className="glyphicons-grater" />
            <Icon className="glyphicons-kettle" />
            <Icon className="glyphicons-hospital" />
            <Icon className="glyphicons-hospital-h" />
            <Icon className="glyphicons-microphone" />
            <Icon className="glyphicons-webcam" />
            <Icon className="glyphicons-temple-christianity-church" />
            <Icon className="glyphicons-temple-islam" />
            <Icon className="glyphicons-temple-hindu" />
            <Icon className="glyphicons-temple-buddhist" />
            <Icon className="glyphicons-bicycle" />
            <Icon className="glyphicons-life-preserver" />
            <Icon className="glyphicons-share-alt" />
            <Icon className="glyphicons-comments" />
            <Icon className="glyphicons-flower" />
            <Icon className="glyphicons-baseball" />
            <Icon className="glyphicons-rugby" />
            <Icon className="glyphicons-ax" />
            <Icon className="glyphicons-table-tennis" />
            <Icon className="glyphicons-bowling" />
            <Icon className="glyphicons-tree-conifer" />
            <Icon className="glyphicons-tree-deciduous" />
            <Icon className="glyphicons-more-items" />
            <Icon className="glyphicons-sort" />
            <Icon className="glyphicons-filter" />
            <Icon className="glyphicons-gamepad" />
            <Icon className="glyphicons-playing-dices" />
            <Icon className="glyphicons-calculator" />
            <Icon className="glyphicons-tie" />
            <Icon className="glyphicons-wallet" />
            <Icon className="glyphicons-piano" />
            <Icon className="glyphicons-sampler" />
            <Icon className="glyphicons-podium" />
            <Icon className="glyphicons-soccer-ball" />
            <Icon className="glyphicons-blog" />
            <Icon className="glyphicons-dashboard" />
            <Icon className="glyphicons-certificate" />
            <Icon className="glyphicons-bell" />
            <Icon className="glyphicons-candle" />
            <Icon className="glyphicons-pushpin" />
            <Icon className="glyphicons-iphone-shake" />
            <Icon className="glyphicons-pin-flag" />
            <Icon className="glyphicons-turtle" />
            <Icon className="glyphicons-rabbit" />
            <Icon className="glyphicons-globe" />
            <Icon className="glyphicons-briefcase" />
            <Icon className="glyphicons-hdd" />
            <Icon className="glyphicons-thumbs-up" />
            <Icon className="glyphicons-thumbs-down" />
            <Icon className="glyphicons-hand-right" />
            <Icon className="glyphicons-hand-left" />
            <Icon className="glyphicons-hand-up" />
            <Icon className="glyphicons-hand-down" />
            <Icon className="glyphicons-fullscreen" />
            <Icon className="glyphicons-shopping-bag" />
            <Icon className="glyphicons-book-open" />
            <Icon className="glyphicons-nameplate" />
            <Icon className="glyphicons-nameplate-alt" />
            <Icon className="glyphicons-vases" />
            <Icon className="glyphicons-bullhorn" />
            <Icon className="glyphicons-dumbbell" />
            <Icon className="glyphicons-suitcase" />
            <Icon className="glyphicons-file-import" />
            <Icon className="glyphicons-file-export" />
            <Icon className="glyphicons-bug" />
            <Icon className="glyphicons-crown" />
            <Icon className="glyphicons-smoking" />
            <Icon className="glyphicons-cloud-download" />
            <Icon className="glyphicons-cloud-upload" />
            <Icon className="glyphicons-restart" />
            <Icon className="glyphicons-security-camera" />
            <Icon className="glyphicons-expand" />
            <Icon className="glyphicons-collapse" />
            <Icon className="glyphicons-collapse-top" />
            <Icon className="glyphicons-globe-af" />
            <Icon className="glyphicons-global" />
            <Icon className="glyphicons-spray" />
            <Icon className="glyphicons-nails" />
            <Icon className="glyphicons-claw-hammer" />
            <Icon className="glyphicons-classic-hammer" />
            <Icon className="glyphicons-hand-saw" />
            <Icon className="glyphicons-riflescope" />
            <Icon className="glyphicons-electrical-socket-eu" />
            <Icon className="glyphicons-electrical-socket-us" />
            <Icon className="glyphicons-message-forward" />
            <Icon className="glyphicons-coat-hanger" />
            <Icon className="glyphicons-dress" />
            <Icon className="glyphicons-bathrobe" />
            <Icon className="glyphicons-shirt" />
            <Icon className="glyphicons-underwear" />
            <Icon className="glyphicons-log-in" />
            <Icon className="glyphicons-log-out" />
            <Icon className="glyphicons-exit" />
            <Icon className="glyphicons-new-window-alt" />
            <Icon className="glyphicons-video-sd" />
            <Icon className="glyphicons-video-hd" />
            <Icon className="glyphicons-subtitles" />
            <Icon className="glyphicons-sound-stereo" />
            <Icon className="glyphicons-sound-dolby" />
            <Icon className="glyphicons-sound-5-1" />
            <Icon className="glyphicons-sound-6-1" />
            <Icon className="glyphicons-sound-7-1" />
            <Icon className="glyphicons-copyright-mark" />
            <Icon className="glyphicons-registration-mark" />
            <Icon className="glyphicons-radar" />
            <Icon className="glyphicons-skateboard" />
            <Icon className="glyphicons-golf-course" />
            <Icon className="glyphicons-sorting" />
            <Icon className="glyphicons-sort-by-alphabet" />
            <Icon className="glyphicons-sort-by-alphabet-alt" />
            <Icon className="glyphicons-sort-by-order" />
            <Icon className="glyphicons-sort-by-order-alt" />
            <Icon className="glyphicons-sort-by-attributes" />
            <Icon className="glyphicons-sort-by-attributes-alt" />
            <Icon className="glyphicons-compressed" />
            <Icon className="glyphicons-package" />
            <Icon className="glyphicons-cloud-plus" />
            <Icon className="glyphicons-cloud-minus" />
            <Icon className="glyphicons-disk-save" />
            <Icon className="glyphicons-disk-open" />
            <Icon className="glyphicons-disk-saved" />
            <Icon className="glyphicons-disk-remove" />
            <Icon className="glyphicons-disk-import" />
            <Icon className="glyphicons-disk-export" />
            <Icon className="glyphicons-tower" />
            <Icon className="glyphicons-send" />
            <Icon className="glyphicons-git-branch" />
            <Icon className="glyphicons-git-create" />
            <Icon className="glyphicons-git-private" />
            <Icon className="glyphicons-git-delete" />
            <Icon className="glyphicons-git-merge" />
            <Icon className="glyphicons-git-pull-request" />
            <Icon className="glyphicons-git-compare" />
            <Icon className="glyphicons-git-commit" />
            <Icon className="glyphicons-construction-cone" />
            <Icon className="glyphicons-shoe-steps" />
            <Icon className="glyphicons-plus" />
            <Icon className="glyphicons-minus" />
            <Icon className="glyphicons-redo" />
            <Icon className="glyphicons-undo" />
            <Icon className="glyphicons-golf" />
            <Icon className="glyphicons-hockey" />
            <Icon className="glyphicons-pipe" />
            <Icon className="glyphicons-wrench" />
            <Icon className="glyphicons-folder-closed" />
            <Icon className="glyphicons-phone-alt" />
            <Icon className="glyphicons-earphone" />
            <Icon className="glyphicons-floppy-disk" />
            <Icon className="glyphicons-floppy-saved" />
            <Icon className="glyphicons-floppy-remove" />
            <Icon className="glyphicons-floppy-save" />
            <Icon className="glyphicons-floppy-open" />
            <Icon className="glyphicons-translate" />
            <Icon className="glyphicons-fax" />
            <Icon className="glyphicons-factory" />
            <Icon className="glyphicons-shop-window" />
            <Icon className="glyphicons-shop" />
            <Icon className="glyphicons-kiosk" />
            <Icon className="glyphicons-kiosk-wheels" />
            <Icon className="glyphicons-kiosk-light" />
            <Icon className="glyphicons-kiosk-food" />
            <Icon className="glyphicons-transfer" />
            <Icon className="glyphicons-money" />
            <Icon className="glyphicons-header" />
            <Icon className="glyphicons-blacksmith" />
            <Icon className="glyphicons-saw-blade" />
            <Icon className="glyphicons-basketball" />
            <Icon className="glyphicons-server" />
            <Icon className="glyphicons-server-plus" />
            <Icon className="glyphicons-server-minus" />
            <Icon className="glyphicons-server-ban" />
            <Icon className="glyphicons-server-flag" />
            <Icon className="glyphicons-server-lock" />
            <Icon className="glyphicons-server-new" />
            <Icon className="glyphicons-charging-station" />
            <Icon className="glyphicons-gas-station" />
            <Icon className="glyphicons-target" />
            <Icon className="glyphicons-bed-alt" />
            <Icon className="glyphicons-mosquito-net" />
            <Icon className="glyphicons-dining-set" />
            <Icon className="glyphicons-plate-of-food" />
            <Icon className="glyphicons-hygiene-kit" />
            <Icon className="glyphicons-blackboard" />
            <Icon className="glyphicons-marriage" />
            <Icon className="glyphicons-bucket" />
            <Icon className="glyphicons-none-color-swatch" />
            <Icon className="glyphicons-bring-forward" />
            <Icon className="glyphicons-bring-to-front" />
            <Icon className="glyphicons-send-backward" />
            <Icon className="glyphicons-send-to-back" />
            <Icon className="glyphicons-fit-frame-to-image" />
            <Icon className="glyphicons-fit-image-to-frame" />
            <Icon className="glyphicons-multiple-displays" />
            <Icon className="glyphicons-handshake" />
            <Icon className="glyphicons-child" />
            <Icon className="glyphicons-baby-formula" />
            <Icon className="glyphicons-medicine" />
            <Icon className="glyphicons-atv-vehicle" />
            <Icon className="glyphicons-motorcycle" />
            <Icon className="glyphicons-bed" />
            <Icon className="glyphicons-tent" />
            <Icon className="glyphicons-glasses" />
            <Icon className="glyphicons-sunglasses" />
            <Icon className="glyphicons-family" />
            <Icon className="glyphicons-education" />
            <Icon className="glyphicons-shoes" />
            <Icon className="glyphicons-map" />
            <Icon className="glyphicons-cd" />
            <Icon className="glyphicons-alert" />
            <Icon className="glyphicons-piggy-bank" />
            <Icon className="glyphicons-star-half" />
            <Icon className="glyphicons-cluster" />
            <Icon className="glyphicons-flowchart" />
            <Icon className="glyphicons-commodities" />
            <Icon className="glyphicons-duplicate" />
            <Icon className="glyphicons-copy" />
            <Icon className="glyphicons-paste" />
            <Icon className="glyphicons-bath-bathtub" />
            <Icon className="glyphicons-bath-shower" />
            <Icon className="glyphicons-shower" />
            <Icon className="glyphicons-menu-hamburger" />
            <Icon className="glyphicons-option-vertical" />
            <Icon className="glyphicons-option-horizontal" />
            <Icon className="glyphicons-currency-conversion" />
            <Icon className="glyphicons-user-ban" />
            <Icon className="glyphicons-user-lock" />
            <Icon className="glyphicons-user-flag" />
            <Icon className="glyphicons-user-asterisk" />
            <Icon className="glyphicons-user-alert" />
            <Icon className="glyphicons-user-key" />
            <Icon className="glyphicons-user-conversation" />
            <Icon className="glyphicons-database" />
            <Icon className="glyphicons-database-search" />
            <Icon className="glyphicons-list-alt" />
            <Icon className="glyphicons-hazard-sign" />
            <Icon className="glyphicons-hazard" />
            <Icon className="glyphicons-stop-sign" />
            <Icon className="glyphicons-lab" />
            <Icon className="glyphicons-lab-alt" />
            <Icon className="glyphicons-ice-cream" />
            <Icon className="glyphicons-ice-lolly" />
            <Icon className="glyphicons-ice-lolly-tasted" />
            <Icon className="glyphicons-invoice" />
            <Icon className="glyphicons-cart-tick" />
            <Icon className="glyphicons-hourglass" />
            <Icon className="glyphicons-cat" />
            <Icon className="glyphicons-lamp" />
            <Icon className="glyphicons-scale-classic" />
            <Icon className="glyphicons-eye-plus" />
            <Icon className="glyphicons-eye-minus" />
            <Icon className="glyphicons-quote" />
            <Icon className="glyphicons-bitcoin" />
            <Icon className="glyphicons-yen" />
            <Icon className="glyphicons-ruble" />
            <Icon className="glyphicons-erase" />
            <Icon className="glyphicons-podcast" />
            <Icon className="glyphicons-firework" />
            <Icon className="glyphicons-scale" />
            <Icon className="glyphicons-king" />
            <Icon className="glyphicons-queen" />
            <Icon className="glyphicons-pawn" />
            <Icon className="glyphicons-bishop" />
            <Icon className="glyphicons-knight" />
            <Icon className="glyphicons-mic-mute" />
            <Icon className="glyphicons-voicemail" />
            <Icon className="glyphicons-paragraph" />
            <Icon className="glyphicons-person-walking" />
            <Icon className="glyphicons-person-wheelchair" />
            <Icon className="glyphicons-underground" />
            <Icon className="glyphicons-car-hov" />
            <Icon className="glyphicons-car-rental" />
            <Icon className="glyphicons-transport" />
            <Icon className="glyphicons-taxi" />
            <Icon className="glyphicons-ice-cream-no" />
            <Icon className="glyphicons-uk-rat-u" />
            <Icon className="glyphicons-uk-rat-pg" />
            <Icon className="glyphicons-uk-rat-12a" />
            <Icon className="glyphicons-uk-rat-12" />
            <Icon className="glyphicons-uk-rat-15" />
            <Icon className="glyphicons-uk-rat-18" />
            <Icon className="glyphicons-uk-rat-r18" />
            <Icon className="glyphicons-tv" />
            <Icon className="glyphicons-sms" />
            <Icon className="glyphicons-mms" />
            <Icon className="glyphicons-us-rat-g" />
            <Icon className="glyphicons-us-rat-pg" />
            <Icon className="glyphicons-us-rat-pg-13" />
            <Icon className="glyphicons-us-rat-restricted" />
            <Icon className="glyphicons-us-rat-no-one-17" />
            <Icon className="glyphicons-equalizer" />
            <Icon className="glyphicons-speakers" />
            <Icon className="glyphicons-remote-control" />
            <Icon className="glyphicons-remote-control-tv" />
            <Icon className="glyphicons-shredder" />
            <Icon className="glyphicons-folder-heart" />
            <Icon className="glyphicons-person-running" />
            <Icon className="glyphicons-person" />
            <Icon className="glyphicons-voice" />
            <Icon className="glyphicons-stethoscope" />
            <Icon className="glyphicons-hotspot" />
            <Icon className="glyphicons-activity" />
            <Icon className="glyphicons-watch" />
            <Icon className="glyphicons-scissors-alt" />
            <Icon className="glyphicons-car-wheel" />
            <Icon className="glyphicons-chevron-up" />
            <Icon className="glyphicons-chevron-down" />
            <Icon className="glyphicons-superscript" />
            <Icon className="glyphicons-subscript" />
            <Icon className="glyphicons-text-size" />
            <Icon className="glyphicons-text-color" />
            <Icon className="glyphicons-text-background" />
            <Icon className="glyphicons-modal-window" />
            <Icon className="glyphicons-newspaper" />
            <Icon className="glyphicons-tractor" />
          </div>
        </Example>

      </Page>
    );
  }

}
