module ApplicationHelper
  # app/helpers/application_helper.rb
  def webpack_bundle_tag(bundle, options)
    src =
      if Rails.configuration.webpack[:use_manifest]
        manifest = Rails.configuration.webpack[:asset_manifest]
        filename = manifest[bundle]

        "#{compute_asset_host}/assets/#{filename}"
      elsif options[:dev_server]
        dev_server_url = 'http://localhost:3500'
        "#{dev_server_url}/assets/#{bundle}-bundle.js"
      else
        "#{bundle}-bundle"
      end

    javascript_include_tag(src)
  end

  def webpack_manifest_script
    return '' unless Rails.configuration.webpack[:use_manifest]
    javascript_tag "window.webpackManifest = #{Rails.configuration.webpack[:common_manifest]}"
  end

  def bootstrap_class_for flash_type
    case flash_type.to_sym
    when :success
      "alert-success"
    when :error
      "alert-error"
    when :alert
      "alert-warning"
    when :notice
      "alert-info"
    else
      flash_type.to_s
    end
  end
end
